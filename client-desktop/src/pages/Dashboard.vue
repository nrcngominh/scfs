<template>
  <div class="content dashboard-content">
    <div class="order-grid-container">
      <md-card v-for="order in orders" :key="order.billId" class="order-content">
        <div class="order-content-grid-container">
          <div class="order-text-content">
            <div class="order-header">
              <div>Bill ID:</div>
              <div>{{ order.billId }}</div>
              <div>MOMO ID:</div>
              <div>{{ order.momoTransId }}</div>
            </div>
            <hr />
            <div class="food-list-container">
              <div class="food-list-item">
                <div>Tên món</div>
                <div>Số lượng</div>
              </div>
            </div>
            <div class="food-list-container">
              <div class="food-list-item" v-for="item in order.items" :key="item.food._id">
                <div>{{ item.food.name }}</div>
                <div>{{ item.quantity }}</div>
              </div>
            </div>
          </div>

          <div class="order-action-container">
            <md-button @click="serveOrder(order)" class="md-raised md-primary">Ready</md-button>
          </div>
        </div>
      </md-card>
    </div>

    <div class="upload-image-confirm">
      <md-dialog-confirm
        :md-active.sync="serveConfirmActive"
        md-title="Order ready?"
        md-content="Are you sure the order is ready to serve the customer?"
        md-confirm-text="Confirm"
        md-cancel-text="Cancel"
        @md-cancel="serveConfirmActive = false"
        @md-confirm="confirmServe"
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
import OrderService from "../services/order-service";

export default {
  name: "Dashboard",
  data() {
    return {
      orders: [],
      successAlertActive: false,
      failedAlertActive: false,
      serveConfirmActive: false,
      orderToServe: null
    };
  },
  methods: {
    async serveOrder(order) {
      (this.orderToServe = order), (this.serveConfirmActive = true);
    },
    async confirmServe() {
      try {
        await OrderService.serveOrder(this.orderToServe);
        await this.sync();
        this.successAlertActive = true;
      } catch (error) {
        this.failedAlertActive = true;
      }
    },
    async sync() {
      try {
        const res = await OrderService.getAllUnserved();
        this.orders = res.data;
      } catch (error) {}
    }
  },
  async mounted() {
    await this.sync();
  }
};
</script>
