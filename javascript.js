
		var width=10;
		var difference=100;
		var interveralID =0;
		

		function increase()
		{
			clearInterval(interveralID);
			interveralID=setInterval(expand,10);
		}
		function decrease()
		{
			clearInterval(interveralID);
			interveralID=setInterval(shrink,10);
		}
		function expand()
		{
			if(width<1350)
			{
				width = width+difference;
				document.getElementById("img1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}
		function shrink()
		{
			if(width>10)
			{
				width = width-difference;
				document.getElementById("img1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}
	
