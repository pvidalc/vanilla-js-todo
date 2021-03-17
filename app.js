import { handleSubmitForm, handleClickDeleteOrCheck, handleClearAll } from './handlers.js'
import { presentAll } from './helpers.js'

// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

presentAll()