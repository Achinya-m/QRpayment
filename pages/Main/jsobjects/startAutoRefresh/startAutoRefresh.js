export default {
  startAutoRefresh() {
    setInterval(() => {
			getDevice.run();
			getMerchants.run();
			getOrder.run();
			getShop.run();
      getTotal.run();
      getTotalDay.run();
    }, 1000);
  }
}