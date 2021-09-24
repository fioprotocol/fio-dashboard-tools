const fs = require('fs');

const createEmail = require('./server/createEmail');


function saveEmail(name, email) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`generated_templates/${name}.html`, email, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
}

const generate = async (type) => {
  const email = await createEmail(type, { text: ''});
  return saveEmail(type, email);
}

generate('createAccount')
generate('confirmEmail')
generate('passRecovery')
