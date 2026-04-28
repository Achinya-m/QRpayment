export default {
  startAutoRefresh() {
    setInterval(() => {
			getDevice.run();
			getMerchants.run();
			getOrders.run();
			getShop.run();
      getTotal.run();
      getTotalDay.run();
    }, 5000);
  }
}