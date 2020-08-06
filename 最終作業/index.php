<script type="text/javascript">
//一秒後模擬點擊
	setTimeout(function() {
		// IE
		if(document.all) {
			document.getElementById("parentIframe").click();
		}
		// 其它瀏覽器
		else {
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", true, true);
			document.getElementById("parentIframe").dispatchEvent(e);
		}
	}, 1000);
</script>

<input  id="parentIframe" type="hidden"  onclick="" value=''/>

注意：這是id控制的

//一秒後模擬點擊
	setTimeout(function() {
		// IE
		if(document.all) {
			document.getElementById("parentIframe").click();
		}
		// 其它瀏覽器
		else {
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", true, true);
			document.getElementById("parentIframe").dispatchEvent(e);
		}
	}, 1000);
</script>

<input  id="parentIframe" type="hidden"  onclick="" value=''/>