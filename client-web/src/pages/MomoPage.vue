<template>
  <div class="momo-wrapper">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Momo Bill ID</th>
        <th scope="col">SFCS Bill ID</th>
        <th scope="col">Customer Phone Number</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="transaction in transactions" :key="transaction._id">
        <th scope="row">{{ transaction.index }}</th>
        <td><div>{{ transaction.momoTransId }}</div></td>
        <td><div>{{ transaction.billId }}</div></td>
        <td><div>{{ transaction.customerPhoneNumber }}</div></td>
        <td><div>{{ transaction.amount }}</div></td>
        <td><div>{{ transaction.status }}</div></td>
        <td>
          <button type="button" class="btn btn-primary"
            :class="{hidden: transaction.hasPaid}"
            @click="commitPay(transaction)">Pay</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: "MomoPage",
  data() {
    return {
      transactions: []
    }
  },
  methods: {
    async commitPay(transaction) {
      try {
        await this.$http.put(process.env.VUE_APP_DOMAIN +'/api/transaction', {
          billId: transaction.billId
        })
        transaction.hasPaid = true
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    try {
        const res = await this.$http.get('/api/momo')
        let counter = 0
        this.transactions = res.data.map(trans => {
          trans.index = counter++
          trans.status = trans.hasPaid ? 'Paid' : 'Unpaid'
          return trans
        })
    } catch (error) {
        console.log(error)
    }
  }
}
</script>

<style scoped>
.momo-wrapper {
  margin: 5%;
}

tr > td {
  vertical-align:middle;
}

tr > td > button.hidden {
  display: none
}
</style>
