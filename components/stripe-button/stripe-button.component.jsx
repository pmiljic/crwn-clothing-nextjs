import StripeCheckout from 'react-stripe-checkout'

import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HhsPKB92eeJGuUS1SSyeiKgCuO4jW6tSBXTRRrTnqB0R1IyBnYt15nx3YnEd85kETBs4myU3m2Jnb2MXVEDWIW700QMHX8d90'

  const onToken = token => {
    axios({
      url: '/api/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment')
      })
      .catch(error => {
        console.log('Payment Error: ', error)
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        )
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
