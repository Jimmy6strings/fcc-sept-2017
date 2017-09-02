function getIssues() {

}

function showIssues(json) {

}

function createIssue() {
  var title = document.getElementById('title').value;
  var text = document.getElementById('body').value;
  var issues = document.getElementById('issues');
  if (title && text) {
    issues.innerHTML += title;
    issues.innerHTML += text;
    console.log("issue added");
  } else {
    alert("you need to add both title and description");
    console.log("issue not added");
  }
  fetch('https://api.github.com/Jimmy6strings/fcc-sept-2017',
  {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function showResults(json) {

}

function forkRepo() {
  const repo = 'Jimmy6strings/fcc-sept-2017'
  //use fetch to fork it!
  showIssues();
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
