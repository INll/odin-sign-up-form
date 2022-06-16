const pwd = document.querySelector('.pwd');
const pwdc = document.querySelector('.pwdC');
const pwError = document.querySelector('.pwError');
const pwcError = document.querySelector('.pwcError');

// Validate PASSWORD field
pwd.addEventListener('keyup', e => {
  const pwdString = pwd.value;
  let errMsg = '';
  let regExCap = /[A-Z]+/;
  let regExOneSpcl = /[*@!#%&()^~{}]+/;
  // console.log(pwd.value);

  // Hide errMsg if input field is empty
  if (pwd.value.length == 0) {
    pwError.innerHTML = '';
    return;
  }

  // Check if input matches requirements
  if (pwdString.length < 8) {
    errMsg += 'Length must ' + '<b><u>' + 'exceed 8' + '</u></b>' + '.<br>';
  }
  if (!regExCap.test(pwdString)) {
    errMsg += 'Must contain '  + '<b><u>' + 'at least one' + '</u></b>' + ' capital letter.' + '<br>';
  }
  if (!regExOneSpcl.test(pwdString)) {
    errMsg += 'Must contain ' + '<b><u>' + 'at least one' + '</u></b>' + ' of: @!#%&()^~{}.' + '<br>';
  }
  // console.log(errMsg);
  if (errMsg != ''){
    pwError.innerHTML = errMsg; // Display error
  } else {
    pwError.innerHTML = ''; // Do not show errMsg if all conditions are met
  }
})

// Validate CONFIRM PASSWORD field
pwdc.addEventListener('keyup', e => {
  const pwdcString = pwdc.value;
  const pwdString = pwd.value;
  let errMsg = '';
  console.log(pwdc.value);
  console.log(pwd.value);

  // Check if both fields are identical
  if (pwdc.value !== pwd.value) {
    errMsg += '&nbsp;&nbsp;&nbsp;&nbsp;Passwords do not match!';
    pwcError.innerHTML = errMsg;
  } else {
    pwcError.innerHTML = '';
  }
})