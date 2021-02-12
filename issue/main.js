document.getElementById('issueInputForm').addEventListener('submit', submitIssue);
const header = document.querySelector('.container').querySelector('span');
let openIssues ;
const updateIssues = function(issues){
    iss = issues.filter(iss => iss.status === 'Open');
    
    header.textContent = iss.length;
}


function submitIssue(e) {
    e.preventDefault();
  const getInputValue = id => document.getElementById(id).value;
  const description = getInputValue('issueDescription');
  const severity = getInputValue('issueSeverity');
  const assignedTo = getInputValue('issueAssignedTo');
  const id = Math.floor(Math.random()*100000000) + '';
  const status = 'Open';
  let iss;
  const issue = { id, description, severity, assignedTo, status };
  let issues = [];
  if (localStorage.getItem('issues')){
    issues = JSON.parse(localStorage.getItem('issues'));
       
      updateIssues(issues);
  }
  
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));
     iss = issues.filter(iss => {
//        console.log(iss.status);
        return iss.status === 'Open'

    });
//    console.log(iss.length);
  document.getElementById('issueInputForm').reset();
  fetchIssues();
  updateIssues(issues);
  
}

const closeIssue = id => {
  const issues = JSON.parse(localStorage.getItem('issues'));
//    console.log(issues);
  const currentIssue = issues.find(issue => +issue.id === id);
//    console.log(currentIssue);
  currentIssue.status = 'Closed';
    
  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
    updateIssues(issues);
}

const deleteIssue = id => {
  const issues = JSON.parse(localStorage.getItem('issues'));
//    console.log(issues,id);
  const remainingIssues = issues.filter( issue =>{
//      console.log(+issue.id); 
      return +issue.id !== id 
  });
//    console.log(remainingIssues);
  localStorage.setItem('issues', JSON.stringify(remainingIssues));
    fetchIssues();
    updateIssues(remainingIssues);
}

const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.getElementById('issuesList');
  issuesList.innerHTML = '';
    updateIssues(issues);
  for (var i = 0; i < issues.length; i++) {
    const {id, description, severity, assignedTo, status} = issues[i];

    issuesList.innerHTML +=   `<div class="well">
                              <h6>Issue ID: ${id} </h6>
                              <p><span class="label label-info"> ${status} </span></p>
                              <h3 class="${status==='Closed' ? 'del' : ''}"> ${description} </h3>
                              <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
                              <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
                              <a href="#" onclick="closeIssue(${id})" class="btn btn-warning">Close</a>
                              <a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
                              </div>`;
  }
}
