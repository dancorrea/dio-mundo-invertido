import { subscribeToHellfireClub } from "./firebase/hellfire-club.js";

(function main() {
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtName');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,
    }

    await subscribeToHellfireClub(subscription);
});
})()