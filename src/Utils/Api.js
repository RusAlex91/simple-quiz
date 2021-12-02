export async function getQuizQuestions (quantity) {
  const url = new URL('https://opentdb.com/api.php?')
  url.search = new URLSearchParams({
    amount: quantity
  })

  const response = await fetch(url)
  const data = await response.json()
  return data
}

export async function sendQuizAnswer (answerData) {
  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ answer: answerData })
  })
  const content = await rawResponse.json()

  console.log(content)
}
