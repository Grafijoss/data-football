<template lang="pug">
	.wrrp-mainspinner
		.main-spinner
			.lds-ring
				div
				div
				div
				div
</template>

<script></script>

<style lang="scss">
.wrrp-mainspinner {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  .main-spinner {
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    .lds-ring {
      display: inline-block;
      position: relative;
      width: 140px;
      height: 140px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 120px;
      height: 120px;
      margin: 12px;
      border: 12px solid #fda439;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fda439 transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
