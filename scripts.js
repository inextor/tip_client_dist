
function renderPaypalButton(serverAddress,tip)
{
	paypal.Buttons
	({
		createOrder: function(data, actions) {
		// Set up the transaction
		   //Call The server
			return actions.order.create
			({
					purchase_units: [{
						amount: {
								value: tip.price
						}
					}]
					,shipping_preference: "NO_SHIPPING"
			}); 
		},
		onApprove: function(data, actions) {
		    console.log("Data has",data);
				//MMMM Call Server On Capture
			return actions.order.capture().then(function(details) {
				alert('Transaction completed by ' + details.payer.name.given_name);
				// Call your server to save the transaction
				
					return fetch(serverAddress+'/paypal-transaction-complete', {
					method: 'post',
					credentials: 'include',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify({
						orderID: data.orderID
					})
				});
			});
		}

	}).render( '#paypal_button_'+tip.id );
}

function renderPaypalButtonSubscription(serverAddress )
{
	paypal.Buttons
	({
		createOrder: function (data, actions) {
			return fetch(serverAddress+'/paypal_order.php?type=subscription', 
			{
				method: 'POST',
				headers: { 'content-type' : 'application/json' },
				credentials: 'include',
				body : JSON.stringify({})
			})
			.then(function(res){
				return res.json();
			}).then(function(data) {
				return data.id;
			});
		},
		onApprove: (data, actions)=>
		{
			return captureOrder(serverAddress, data.orderID );
		}
	}).render( '#paypal_button_subscription');
}

function captureOrder(serverAddress,orderID)
{
	return fetch( serverAddress+'/paypal_order.php?paypal_order_id='+orderID+'&action=capture', 
	{
		method: 'POST',
		credentials: 'include',
		headers: { 'content-type' : 'application/json' },
		body : ''
	}).then(function(res) {
		return res.json();
	})
	.then(()=>
	{
		window.location.reload();
	});
}

function renderPaypalButton2(serverAddress,tip)
{
	try
	{
		console.log("FOOO button2");
		paypal.Buttons
		({
			createOrder: function (data, actions) 
			{
				console.log("Making fetch button2");
				return fetch(serverAddress+'/paypal_order.php?tip_id='+tip.id+'&type=tip', 
				{
					method: 'post',
					headers: { 'content-type' : 'application/json' },
					credentials: 'include',
					body : JSON.stringify({tip_id: tip.id,type:'tip'})
				})
				.then(function(res){
					return res.json();
				}).then(function(data) {
					return data.id;
				});
			},
			onApprove: (data, actions)=>
			{
				return captureOrder(serverAddress, data.orderID );
			}
		}).render( '#paypal_button_'+tip.id );
	}
	catch(error)
	{
			console.log("FOOOOOO",error);
	}
}

;
//# sourceMappingURL=scripts.js.map