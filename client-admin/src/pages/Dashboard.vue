<template>
  <div class="content dashboard-content">
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
        <p>{{ obj.category }}</p>
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
      <md-dialog class="edit-dialog" :md-active.sync="showEditDialog">
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
              <md-button @click="showEditDialog = false">Cancel</md-button>
            </div>
          </md-tab>

          <md-tab md-label="Image">
            <div class="tab-content"></div>

            <div class="edit-button-wrapper">
              <md-button>Upload</md-button>
              <md-button @click="showEditDialog = false">Cancel</md-button>
            </div>
          </md-tab>
        </md-tabs>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import FoodService from "../services/food-service";

export default {
  name: "Dashboard",
  data() {
    return {
      responseArr: [],
      filterName: "",
      filterCategory: "",
      showEditDialog: false,
      selectedFood: {
        _id: "",
        name: "",
        price: "",
        description: ""
      }
    };
  },
  computed: {
    categories() {
      const regexMatchCategory = new RegExp(this.filterCategory, "i");
      const regexMatchName = new RegExp(this.filterName, "i");
      this.responseArr.forEach(obj => {
        if (!this.filterCategory || regexMatchCategory.test(obj.category)) {
          obj.hasFood = false;
          obj.foods.forEach(food => {
            if (!this.filterName || regexMatchName.test(food.name)) {
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
    async editFood(food) {
      this.selectedFood._id = food._id
      this.selectedFood.name = food.name;
      this.selectedFood.price = food.price;
      this.selectedFood.description = food.description;
      this.showEditDialog = true;
    },
    async submitEdit() {
      try {
        FoodService.update(this.selectedFood)
      } catch (error) {
      console.log(error)
      }
    },
    async removeFood(food) {
      this.selectedFood._id = food._id
      this.selectedFood.name = food.name;
      this.selectedFood.price = food.price;
      this.selectedFood.description = food.description;
      try {
        FoodService.removeById(this.selectedFood._id)
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    try {
      const res = await FoodService.getAll();
      this.responseArr = res.data;
    } catch (error) {}
  }
};
</script>
