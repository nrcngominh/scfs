<template>
  <div class="content food-manager-content">
    <div class="category-select">
      <md-field>
        <label>Category</label>
        <md-input v-model="filterCategory"></md-input>
      </md-field>
      <md-field>
        <label>Name</label>
        <md-input v-model="filterName"></md-input>
      </md-field>
    </div>

    <div
      class="category-grid-container"
      :class="{ 'category-hidden': obj.hasFood != null && !obj.hasFood }"
      v-for="obj in categories"
      :key="obj.category"
    >
      <div class="category-header">
        <p>{{ obj.name }}</p>
      </div>
      <div class="food-grid-container">
        <md-card
          v-for="food in obj.foods"
          :key="food.name"
          class="food-content"
          :class="{ 'food-hidden': food.active != null && !food.active }"
        >
          <div class="food-content-grid-container">
            <div>
              <img :src="food.img" />
            </div>
            <div class="food-text-content">
              <div>Name:</div>
              <div class="name">{{ food.name }}</div>

              <div>Price:</div>
              <div class="price">{{ food.price }}</div>

              <div>Description:</div>
              <div>{{ food.description }}</div>
            </div>

            <div class="food-action-container">
              <md-button @click="editFood(food)">Edit</md-button>
              <md-button @click="removeFood(food)">Remove</md-button>
            </div>
          </div>
        </md-card>
      </div>
    </div>

    <div>
      <md-dialog class="edit-dialog" :md-active.sync="editDialogActive">
        <md-dialog-title>Edit food</md-dialog-title>

        <md-tabs md-dynamic-height>
          <md-tab md-label="Content">
            <div class="tab-content">
              <md-field>
                <label>Name</label>
                <md-input v-model="selectedFood.name"></md-input>
              </md-field>

              <md-field>
                <label>Price</label>
                <md-input v-model="selectedFood.price"></md-input>
              </md-field>

              <md-field>
                <label>Description</label>
                <md-input v-model="selectedFood.description"></md-input>
              </md-field>
            </div>
            <div class="edit-button-wrapper">
              <md-button @click="submitEdit()">Submit</md-button>
              <md-button @click="editDialogActive = false">Cancel</md-button>
            </div>
          </md-tab>

          <md-tab md-label="Image">
            <div class="tab-content">
              <div class="file-upload">
                <md-field>
                  <label>Chooose image to upload</label>
                  <md-input v-model="imagePath"></md-input>
                </md-field>
                <div class="browse-button-wrapper">
                  <md-button class="md-raised md-primary" @click="selectFile">Browse</md-button>
                </div>
              </div>
            </div>

            <div class="edit-button-wrapper">
              <md-button @click="uploadImage">Upload</md-button>
              <md-button @click="editDialogActive = false">Cancel</md-button>
            </div>
          </md-tab>
        </md-tabs>
      </md-dialog>
    </div>

    <div class="edit-food-confirm">
      <md-dialog-confirm
        :md-active.sync="editConfirmActive"
        md-title="Update food?"
        md-content="Are you sure to update the food?"
        md-confirm-text="Confirm"
        md-cancel-text="Cancel"
        @md-cancel="editConfirmActive = false"
        @md-confirm="confirmEdit"
      />
    </div>

    <div class="remove-food-confirm">
      <md-dialog-confirm
        :md-active.sync="removeConfirmActive"
        md-title="Remove food?"
        md-content="Are you sure to remove the food?"
        md-confirm-text="Confirm"
        md-cancel-text="Cancel"
        @md-cancel="removeConfirmActive = false"
        @md-confirm="confirmRemove"
      />
    </div>

    <div class="upload-image-confirm">
      <md-dialog-confirm
        :md-active.sync="uploadImageConfirm"
        md-title="Upload new image?"
        md-content="Are you sure to upload new image for the food?"
        md-confirm-text="Confirm"
        md-cancel-text="Cancel"
        @md-cancel="uploadImageConfirm = false"
        @md-confirm="confirmUpload"
      />
    </div>

    <md-dialog-alert
      :md-active.sync="successAlertActive"
      md-title="Success!"
      md-content="Your changes has been saved."
    />
    <md-dialog-alert
      :md-active.sync="failedAlertActive"
      md-title="Failed!"
      md-content="Your changes has not been saved."
    />
  </div>
</template>

<script>
import FoodService from "../services/food-service";
import FileService from "../services/file-service";

export default {
  name: "FoodPage",
  data() {
    return {
      responseArr: [],
      filterName: "",
      filterCategory: "",
      editDialogActive: false,
      editConfirmActive: false,
      uploadImageConfirm: false,
      removeConfirmActive: false,
      successAlertActive: false,
      failedAlertActive: false,
      selectedFoodRef: null,
      selectedFood: {
        _id: "",
        name: "",
        price: "",
        description: ""
      },
      imagePath: ""
    };
  },
  computed: {
    categories() {
      const regexMatchCategory = new RegExp(this.filterCategory, "i");
      const regexMatchName = new RegExp(this.filterName, "i");
      this.responseArr.forEach(obj => {
        if (!this.filterCategory || regexMatchCategory.test(obj.name)) {
          obj.hasFood = false;
          obj.foods.forEach(food => {
            if (
              !this.filterName ||
              (food.name && regexMatchName.test(food.name))
            ) {
              food.active = true;
              obj.hasFood = true;
            } else {
              food.active = false;
            }
          });
        } else {
          obj.hasFood = false;
        }
      });
      return this.responseArr;
    }
  },
  methods: {
    selectFood(food) {
      this.selectedFoodRef = food;
      this.selectedFood._id = food._id;
      this.selectedFood.name = food.name;
      this.selectedFood.price = food.price;
      this.selectedFood.description = food.description;
      this.selectFood.img = food.img;
    },
    editFood(food) {
      this.selectFood(food);
      this.imagePath = "";
      this.editDialogActive = true;
    },
    submitEdit() {
      this.editConfirmActive = true;
    },
    async confirmEdit() {
      try {
        await FoodService.update(this.selectedFood);
        this.successAlertActive = true;
        this.selectedFoodRef.name = this.selectedFood.name;
        this.selectedFoodRef.price = this.selectedFood.price;
        this.selectedFoodRef.description = this.selectedFood.description;
      } catch (error) {
        this.failedAlertActive = true;
      }
    },
    removeFood(food) {
      this.selectFood(food);
      this.removeConfirmActive = true;
    },
    async confirmRemove() {
      try {
        await FoodService.removeById(this.selectedFood._id);
        this.successAlertActive = true;
        this.selectedFoodRef.active = false;
        this.selectedFoodRef.name = null;
      } catch (error) {
        this.failedAlertActive = true;
      }
    },
    async selectFile() {
      this.imagePath = await FileService.openFileDialog();
    },
    uploadImage() {
      this.uploadImageConfirm = true;
    },
    async confirmUpload() {
      try {
        const data = await FoodService.uploadImage(
          this.selectedFood._id,
          this.imagePath
        );
        this.successAlertActive = true;
        this.selectedFoodRef.img = data.img;
      } catch (error) {
        this.failedAlertActive = true;
      }
    }
  },
  async mounted() {
    try {
      const foods = (await FoodService.getAll()).data;
      const categories = (await FoodService.getAllCategories()).data;
      categories.forEach(category => (category.foods = []));
      foods.map(food => {
        const ownCategory = categories.find(
          category => category._id === food.categoryId
        );
        ownCategory.foods.push(food);
        food.img =
          (process.env.VUE_APP_DOMAIN || "http://localhost") + food.img;
        return ownCategory;
      });
      console.log(categories);
      this.responseArr = categories;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
