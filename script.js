window.onload = function () {

    //1. INPUTS

    //1.1. PERSONAL INFO INPUTS

    //1.1.1. NAME
    let nameInput = document.getElementById("nameInput");

    nameInput.addEventListener("input", nameInputFunction);

    function nameInputFunction() {
        let nameText = document.getElementById("nameText");
        nameText.innerText = this.value;
    }

    //1.1.2. NACIONALITY
    let nacionalityInput = document.getElementById("nationalityInput");

    nacionalityInput.addEventListener("input", nacionalityInputFunction);

    function nacionalityInputFunction() {
        let nacionalityText = document.getElementById("nacionalityText");
        nacionalityText.innerText = this.value + ",";
    }

    //1.1.3. CIVIL STATUS
    let civilStatusInput = document.getElementById("civilStatusInput");

    civilStatusInput.addEventListener("input", CSinputFunction);

    function CSinputFunction() {
        let civilStatusText = document.getElementById("civilStatusText");
        civilStatusText.innerText = this.value + ",";
    }

    //1.1.4. AGE
    let ageInput = document.getElementById("ageInput");

    ageInput.addEventListener("input", ageInputFunction);

    function ageInputFunction() {
        let ageText = document.getElementById("ageText");
        ageText.innerText = this.value;
    }

    //1.1.5. HOME ADRESS
    let homeAdressInput = document.getElementById("homeAdressInput")

    homeAdressInput.addEventListener("input", HAinputFunction);

    function HAinputFunction() {
        let homeAdressText = document.getElementById("homeAdressText");
        homeAdressText.innerText = this.value;
    }

    //1.1.6. DISTRICT
    let districtInput = document.getElementById("districtInput");

    districtInput.addEventListener("input", districtInputFunction);

    function districtInputFunction() {
        let districtText = document.getElementById("districtText");
        districtText.innerText = this.value + " -";
    }

    //1.1.7. CITY/STATE
    let cityStateInput = document.getElementById("cityStateInput");

    cityStateInput.addEventListener("input", cityStateInputFunction);

    function cityStateInputFunction() {
        let cityStateText = document.getElementById("cityStateText");
        cityStateText.innerText = this.value;
    }

    //1.1.8. PHONE NUMBER
    let phoneNumberInput = document.getElementById("phoneNumberInput");

    phoneNumberInput.addEventListener("input", PNinputFunction);

    function PNinputFunction() {
        let phoneNumberText = document.getElementById("phoneNumberText");
        phoneNumberText.innerText = this.value + " /";
    }

    //1.1.9. EMAIL
    let emailInput = document.getElementById("emailInput");

    emailInput.addEventListener("input", emailInputFunction);

    function emailInputFunction() {
        let emailText = document.getElementById("emailText");
        emailText.innerText = this.value;
    }

    //1.2. OBJECTIVE INPUT
    let objectiveInput = document.getElementById("objectiveInput");

    objectiveInput.addEventListener("input", objectiveInputFunction);

    function objectiveInputFunction() {
        let objectiveText = document.getElementById("objectiveText");
        objectiveText.innerHTML = this.value;
    }

    //1.3. ACADEMIC FORMATION INPUT
    var academicFormationInput = document.getElementById("academicFormationInput");
    var academicFormationInputExtra = document.getElementsByClassName("academicFormationInputExtra");
    var academicFormationText = document.getElementById("academicFormationText");
    var academicFormationTextExtra = document.getElementsByClassName("academicFormationTextExtra");
    var academicFormationDivExtra = document.getElementsByClassName("academicFormationDivExtra");

    academicFormationInput.addEventListener("input", function () {
        academicFormationText.innerHTML = this.value;
    })

    academicFormationInputExtra[0].addEventListener("input", function () {
        academicFormationDivExtra[0].style.display = "block";
        academicFormationTextExtra[0].innerHTML = this.value;
    })

    academicFormationInputExtra[1].addEventListener("input", function () {
        academicFormationDivExtra[1].style.display = "block";
        academicFormationTextExtra[1].innerHTML = this.value;
    })

    academicFormationInputExtra[2].addEventListener("input", function () {
        academicFormationDivExtra[2].style.display = "block";
        academicFormationTextExtra[2].innerHTML = this.value;
    })

    academicFormationInputExtra[3].addEventListener("input", function () {
        academicFormationDivExtra[3].style.display = "block";
        academicFormationTextExtra[3].innerHTML = this.value;
    })

    var addAcademicFormation = document.getElementsByClassName("addAcademicFormation");
    var eraseAcademicFormation = document.getElementsByClassName("eraseAcademicFormation");

    addAcademicFormation[0].addEventListener("click", function () {
        academicFormationInputExtra[0].style.display = "inline-block";
        addAcademicFormation[0].style.display = "none";
        addAcademicFormation[1].style.display = "inline-block";
        eraseAcademicFormation[0].style.display = "inline-block";
    })
    addAcademicFormation[1].addEventListener("click", function () {
        academicFormationInputExtra[1].style.display = "inline-block";
        addAcademicFormation[1].style.display = "none";
        addAcademicFormation[2].style.display = "inline-block";
        eraseAcademicFormation[0].style.display = "none";
        eraseAcademicFormation[1].style.display = "inline-block";
    })
    addAcademicFormation[2].addEventListener("click", function () {
        academicFormationInputExtra[2].style.display = "inline-block";
        addAcademicFormation[2].style.display = "none";
        addAcademicFormation[3].style.display = "inline-block";
        eraseAcademicFormation[1].style.display = "none";
        eraseAcademicFormation[2].style.display = "inline-block";
    })
    addAcademicFormation[3].addEventListener("click", function () {
        academicFormationInputExtra[3].style.display = "inline-block";
        addAcademicFormation[3].style.display = "none";
        eraseAcademicFormation[2].style.display = "none";
        eraseAcademicFormation[3].style.display = "inline-block";
    })

    eraseAcademicFormation[0].addEventListener("click", function () {
        academicFormationInputExtra[0].style.display = "none";
        academicFormationInputExtra[0].value = '';
        academicFormationDivExtra[0].style.display = "none";
        academicFormationTextExtra[0].innerHTML = '';
        addAcademicFormation[0].style.display = "inline-block";
        addAcademicFormation[1].style.display = "none";
        eraseAcademicFormation[0].style.display = "none";
    })

    eraseAcademicFormation[1].addEventListener("click", function () {
        academicFormationInputExtra[1].style.display = "none";
        academicFormationInputExtra[1].value = '';
        academicFormationTextExtra[1].innerHTML = '';
        academicFormationDivExtra[1].style.display = "none";
        addAcademicFormation[1].style.display = "inline-block";
        addAcademicFormation[2].style.display = "none";
        eraseAcademicFormation[0].style.display = "inline-block";
        eraseAcademicFormation[1].style.display = "none";
    })

    eraseAcademicFormation[2].addEventListener("click", function () {
        academicFormationInputExtra[2].style.display = "none";
        academicFormationInputExtra[2].value = '';
        academicFormationDivExtra[2].style.display = "none";
        academicFormationTextExtra[2].innerHTML = '';
        addAcademicFormation[2].style.display = "inline-block";
        addAcademicFormation[3].style.display = "none";
        eraseAcademicFormation[1].style.display = "inline-block";
        eraseAcademicFormation[2].style.display = "none";
    })

    eraseAcademicFormation[3].addEventListener("click", function () {
        academicFormationInputExtra[3].style.display = "none";
        academicFormationInputExtra[3].value = '';
        academicFormationDivExtra[3].style.display = "none";
        academicFormationTextExtra[3].innerHTML = '';
        addAcademicFormation[3].style.display = "inline-block";
        eraseAcademicFormation[2].style.display = "inline-block";
        eraseAcademicFormation[3].style.display = "none";
    })


    //1.4. PROFESSIONAL EXPERIENCE INPUT
    var professionalExperienceInput = document.getElementById("professionalExperienceInput");
    var professionalExperienceInputExtra = document.getElementsByClassName("professionalExperienceInputExtra");
    var professionalExperienceText = document.getElementById("professionalExperienceText");
    var professionalExperienceTextExtra = document.getElementsByClassName("professionalExperienceTextExtra");
    var professionalExperienceDivExtra = document.getElementsByClassName('professionalExperienceDivExtra');

    professionalExperienceInput.addEventListener("input", function () {
        professionalExperienceText.innerHTML = this.value;
    })

    professionalExperienceInputExtra[0].addEventListener("input", function () {
        professionalExperienceTextExtra[0].innerHTML = this.value;
        professionalExperienceDivExtra[0].style.display = "block";
    })

    professionalExperienceInputExtra[1].addEventListener("input", function () {
        professionalExperienceTextExtra[1].innerHTML = this.value;
        professionalExperienceDivExtra[1].style.display = "block";
    })

    professionalExperienceInputExtra[2].addEventListener("input", function () {
        professionalExperienceTextExtra[2].innerHTML = this.value;
        professionalExperienceDivExtra[2].style.display = "block";
    })

    professionalExperienceInputExtra[3].addEventListener("input", function () {
        professionalExperienceTextExtra[3].innerHTML = this.value;
        professionalExperienceDivExtra[3].style.display = "block";
    })

    var addprofessionalExperience = document.getElementsByClassName("addprofessionalExperience");
    var eraseprofessionalExperience = document.getElementsByClassName("eraseprofessionalExperience");

    addprofessionalExperience[0].addEventListener("click", function () {
        professionalExperienceInputExtra[0].style.display = "inline-block";
        addprofessionalExperience[0].style.display = "none";
        addprofessionalExperience[1].style.display = "inline-block";
        eraseprofessionalExperience[0].style.display = "inline-block";
    })

    addprofessionalExperience[1].addEventListener("click", function () {
        professionalExperienceInputExtra[1].style.display = "inline-block";
        addprofessionalExperience[1].style.display = "none";
        addprofessionalExperience[2].style.display = "inline-block";
        eraseprofessionalExperience[0].style.display = "none"
        eraseprofessionalExperience[1].style.display = "inline-block";
    })

    addprofessionalExperience[2].addEventListener("click", function () {
        professionalExperienceInputExtra[2].style.display = "inline-block";
        addprofessionalExperience[2].style.display = "none";
        addprofessionalExperience[3].style.display = "inline-block";
        eraseprofessionalExperience[1].style.display = "none"
        eraseprofessionalExperience[2].style.display = "inline-block";
    })

    addprofessionalExperience[3].addEventListener("click", function () {
        professionalExperienceInputExtra[3].style.display = "inline-block";
        addprofessionalExperience[3].style.display = "none";
        eraseprofessionalExperience[2].style.display = "none"
        eraseprofessionalExperience[3].style.display = "inline-block";
    })

    eraseprofessionalExperience[0].addEventListener("click", function () {
        professionalExperienceInputExtra[0].style.display = "none";
        professionalExperienceInputExtra[0].value = "";
        professionalExperienceTextExtra[0].innerHTML = "";
        professionalExperienceDivExtra[0].style.display = "none";
        addprofessionalExperience[0].style.display = "inline-block";
        addprofessionalExperience[1].style.display = "none";
        eraseprofessionalExperience[0].style.display = "none";
    })

    eraseprofessionalExperience[1].addEventListener("click", function () {
        professionalExperienceInputExtra[1].style.display = "none";
        professionalExperienceInputExtra[1].value = "";
        professionalExperienceTextExtra[1].innerHTML = "";
        professionalExperienceDivExtra[1].style.display = "none";
        addprofessionalExperience[1].style.display = "inline-block";
        addprofessionalExperience[2].style.display = "none";
        eraseprofessionalExperience[0].style.display = "inline-block"
        eraseprofessionalExperience[1].style.display = "none";
    })

    eraseprofessionalExperience[2].addEventListener("click", function () {
        professionalExperienceInputExtra[2].style.display = "none";
        professionalExperienceInputExtra[2].value = "";
        professionalExperienceTextExtra[2].innerHTML = "";
        professionalExperienceDivExtra[2].style.display = "none";
        addprofessionalExperience[2].style.display = "inline-block";
        addprofessionalExperience[3].style.display = "none";
        eraseprofessionalExperience[1].style.display = "inline-block"
        eraseprofessionalExperience[2].style.display = "none";
    })

    eraseprofessionalExperience[3].addEventListener("click", function () {
        professionalExperienceInputExtra[3].style.display = "none";
        professionalExperienceInputExtra[3].value = "";
        professionalExperienceTextExtra[3].innerHTML = "";
        professionalExperienceDivExtra[3].style.display = "none";
        addprofessionalExperience[3].style.display = "inline-block";
        eraseprofessionalExperience[2].style.display = "inline-block"
        eraseprofessionalExperience[3].style.display = "none";
    })

    //1.5. QUALIFICATIONS INPUT
    var qualificationsInput = document.getElementById("qualificationsInput");
    var qualificationsText = document.getElementById("qualificationsText");
    var qualificationsInputExtra = document.getElementsByClassName("qualificationsInputExtra");
    var qualificationsTextExtra = document.getElementsByClassName("qualificationsTextExtra");
    var qualificationsDivExtra = document.getElementsByClassName('qualificationsDivExtra');

    qualificationsInput.addEventListener("input", function(){
        qualificationsText.innerHTML = this.value;
    })

    qualificationsInputExtra[0].addEventListener("input", function(){
        qualificationsDivExtra[0].style.display = "block";
        qualificationsTextExtra[0].innerHTML = this.value;
    })

    qualificationsInputExtra[1].addEventListener("input", function(){
        qualificationsDivExtra[1].style.display = "block";
        qualificationsTextExtra[1].innerHTML = this.value;
    })

    qualificationsInputExtra[2].addEventListener("input", function(){
        qualificationsDivExtra[2].style.display = "block";
        qualificationsTextExtra[2].innerHTML = this.value;
    })

    qualificationsInputExtra[3].addEventListener("input", function(){
        qualificationsDivExtra[3].style.display = "block";
        qualificationsTextExtra[3].innerHTML = this.value;
    })

    var addQualifications = document.getElementsByClassName("addQualifications");
    var eraseQualifications = document.getElementsByClassName("eraseQualifications");

    addQualifications[0].addEventListener("click", function(){
        qualificationsInputExtra[0].style.display = "inline-block";
        addQualifications[0].style.display = "none";
        addQualifications[1].style.display = "inline-block";
        eraseQualifications[0].style.display = "inline-block";
    })

    addQualifications[1].addEventListener("click", function(){
        qualificationsInputExtra[1].style.display = "inline-block";
        addQualifications[1].style.display = "none";
        addQualifications[2].style.display = "inline-block";
        eraseQualifications[0].style.display = "none";
        eraseQualifications[1].style.display = "inline-block";
    })

    addQualifications[2].addEventListener("click", function(){
        qualificationsInputExtra[2].style.display = "inline-block";
        addQualifications[2].style.display = "none";
        addQualifications[3].style.display = "inline-block";
        eraseQualifications[1].style.display = "none";
        eraseQualifications[2].style.display = "inline-block";
    })

    addQualifications[3].addEventListener("click", function(){
        qualificationsInputExtra[3].style.display = "inline-block";
        addQualifications[3].style.display = "none";
        eraseQualifications[2].style.display = "none";
        eraseQualifications[3].style.display = "inline-block";
    })

    eraseQualifications[0].addEventListener("click", function(){
        qualificationsInputExtra[0].style.display = "none";
        qualificationsInputExtra[0].value = "";
        qualificationsTextExtra[0].innerHTML = "";
        qualificationsDivExtra[0].style.display = "none";
        addQualifications[0].style.display = "inline-block";
        addQualifications[1].style.display = "none";
        eraseQualifications[0].style.display = "none";
    })

    eraseQualifications[1].addEventListener("click", function(){
        qualificationsInputExtra[1].style.display = "none";
        qualificationsInputExtra[1].value = "";
        qualificationsTextExtra[1].innerHTML = "";
        qualificationsDivExtra[1].style.display = "none";
        addQualifications[1].style.display = "inline-block";
        addQualifications[2].style.display = "none";
        eraseQualifications[0].style.display = "inline-block";
        eraseQualifications[1].style.display = "none";
    })

    eraseQualifications[2].addEventListener("click", function(){
        qualificationsInputExtra[2].style.display = "none";
        qualificationsInputExtra[2].value = "";
        qualificationsTextExtra[2].innerHTML = "";
        qualificationsDivExtra[2].style.display = "none";
        addQualifications[2].style.display = "inline-block";
        addQualifications[3].style.display = "none";
        eraseQualifications[1].style.display = "inline-block";
        eraseQualifications[2].style.display = "none";
    })

    eraseQualifications[3].addEventListener("click", function(){
        qualificationsInputExtra[3].style.display = "none";
        qualificationsInputExtra[3].value = "";
        qualificationsTextExtra[3].innerHTML = "";
        qualificationsDivExtra[3].style.display = "none";
        addQualifications[3].style.display = "inline-block";
        eraseQualifications[2].style.display = "inline-block";
        eraseQualifications[3].style.display = "none";
    })

    //1.6. PROFILE INPUT
    let profileInput = document.getElementById("profileInput");

    profileInput.addEventListener("input", profileInputFunction);

    function profileInputFunction() {
        let profileText = document.getElementById("profileText");
        profileText.innerHTML = this.value;
    }

    //1.7. ADDITIONAL INFORMATIONS INPUT
    var additionalInformationsInput = document.getElementById("additionalInformationsInput");
    var additionalInformationsText = document.getElementById("additionalInformationsText");
    var additionalInformationsInputExtra = document.getElementsByClassName("additionalInformationsInputExtra");
    var additionalInformationsTextExtra = document.getElementsByClassName("additionalInformationsTextExtra");
    var additionalInformationsDivExtra = document.getElementsByClassName('additionalInformationsDivExtra')
    
    additionalInformationsInput.addEventListener("input", function(){
        additionalInformationsText.innerHTML = this.value;
    })

    additionalInformationsInputExtra[0].addEventListener("input", function(){
        additionalInformationsTextExtra[0].innerHTML = this.value;
        additionalInformationsDivExtra[0].style.display = "block";
    })

    additionalInformationsInputExtra[1].addEventListener("input", function(){
        additionalInformationsTextExtra[1].innerHTML = this.value;
        additionalInformationsDivExtra[1].style.display = "block";
    })

    additionalInformationsInputExtra[2].addEventListener("input", function(){
        additionalInformationsTextExtra[2].innerHTML = this.value;
        additionalInformationsDivExtra[2].style.display = "block";
    })

    additionalInformationsInputExtra[3].addEventListener("input", function(){
        additionalInformationsTextExtra[3].innerHTML = this.value;
        additionalInformationsDivExtra[3].style.display = "block";
    })

    var addInformations = document.getElementsByClassName("addInformations");
    var eraseInformations = document.getElementsByClassName("eraseInformations");

    addInformations[0].addEventListener("click", function(){
        additionalInformationsInputExtra[0].style.display = "inline-block";
        addInformations[0].style.display = "none";
        addInformations[1].style.display = "inline-block";
        eraseInformations[0].style.display = "inline-block";
    })

    addInformations[1].addEventListener("click", function(){
        additionalInformationsInputExtra[1].style.display = "inline-block";
        addInformations[1].style.display = "none";
        addInformations[2].style.display = "inline-block";
        eraseInformations[0].style.display = "none";
        eraseInformations[1].style.display = "inline-block";
    })

    addInformations[2].addEventListener("click", function(){
        additionalInformationsInputExtra[2].style.display = "inline-block";
        addInformations[2].style.display = "none";
        addInformations[3].style.display = "inline-block";
        eraseInformations[1].style.display = "none";
        eraseInformations[2].style.display = "inline-block";
    })

    addInformations[3].addEventListener("click", function(){
        additionalInformationsInputExtra[3].style.display = "inline-block";
        addInformations[3].style.display = "none";
        eraseInformations[2].style.display = "none";
        eraseInformations[3].style.display = "inline-block";
    })

    eraseInformations[0].addEventListener("click", function(){
        additionalInformationsInputExtra[0].style.display = "none";
        additionalInformationsInputExtra[0].value = "";
        additionalInformationsTextExtra[0].innerHTML = "";
        additionalInformationsDivExtra[0].style.display = "none";
        addInformations[0].style.display = "inline-block";
        addInformations[1].style.display = "none";
        eraseInformations[0].style.display = "none";
    })

    eraseInformations[1].addEventListener("click", function(){
        additionalInformationsInputExtra[1].style.display = "none";
        additionalInformationsInputExtra[1].value = "";
        additionalInformationsTextExtra[1].innerHTML = "";
        additionalInformationsDivExtra[1].style.display = "none";
        addInformations[1].style.display = "inline-block";
        addInformations[2].style.display = "none";
        eraseInformations[0].style.display = "inline-block";
        eraseInformations[1].style.display = "none";
    })

    eraseInformations[2].addEventListener("click", function(){
        additionalInformationsInputExtra[2].style.display = "none";
        additionalInformationsInputExtra[2].value = "";
        additionalInformationsTextExtra[2].innerHTML = "";
        additionalInformationsDivExtra[2].style.display = "none";
        addInformations[2].style.display = "inline-block";
        addInformations[3].style.display = "none";
        eraseInformations[1].style.display = "inline-block";
        eraseInformations[2].style.display = "none";
    })

    eraseInformations[3].addEventListener("click", function(){
        additionalInformationsInputExtra[3].style.display = "none";
        additionalInformationsInputExtra[3].value = "";
        additionalInformationsTextExtra[3].innerHTML = "";
        additionalInformationsDivExtra[3].style.display = "none";
        addInformations[3].style.display = "inline-block";
        eraseInformations[2].style.display = "inline-block";
        eraseInformations[3].style.display = "none";
    })

    //1.8. RESET
    let cleanForm = document.getElementById("cleanForm");

    cleanForm.addEventListener("click", cleanFormFunction);

    function cleanFormFunction() {
        let form1 = document.getElementById("form1");
        let nameText = document.getElementById("nameText");
        let nacionalityText = document.getElementById("nacionalityText");
        let civilStatusText = document.getElementById("civilStatusText");
        let ageText = document.getElementById("ageText");
        let homeAdressText = document.getElementById("homeAdressText");
        let districtText = document.getElementById("districtText");
        let cityStateText = document.getElementById("cityStateText");
        let phoneNumberText = document.getElementById("phoneNumberText");
        let emailText = document.getElementById("emailText");
        let objectiveText = document.getElementById("objectiveText");
        let academicFormationText = document.getElementById("academicFormationText");
        let professionalExperienceText = document.getElementById("professionalExperienceText");
        let qualificationsText = document.getElementById("qualificationsText");
        let profileText = document.getElementById("profileText");
        let additionalInformationsText = document.getElementById("additionalInformationsText");

        form1.reset();
        nameText.innerText = '"Nome Completo"';
        nacionalityText.innerText = '"Nacionalidade",';
        civilStatusText.innerText = '"Estado Civil",';
        ageText.innerText = '"Idade"';
        homeAdressText.innerText = '"Rua", "nº", "complemento"';
        districtText.innerText = '"Bairro" -';
        cityStateText.innerText = '"Cidade/UF"';
        phoneNumberText.innerText = '"Telefone/Celular" /';
        emailText.innerText = '"E-mail"';
        objectiveText.innerHTML = 'Descreva o seu objetivo';

        academicFormationText.innerHTML = 'Descreva sua Formação Acadêmica';
        for (let element of academicFormationTextExtra) {
            element.innerHTML = "";
        }
        for (let element of academicFormationDivExtra) {
            element.style.display = "none";
        }
        for (let element of academicFormationInputExtra) {
            element.style.display = "none";
        }
        for (let element of eraseAcademicFormation) {
            element.style.display = "none";
        }
        for (let element of addAcademicFormation) {
            element.style.display = "none";
        }
        addAcademicFormation[0].style.display = "inline-block";

        professionalExperienceText.innerHTML = 'Descreva sua experiência profissional';
        for (let element of professionalExperienceTextExtra) {
            element.innerHTML = "";
        }
        for (let element of professionalExperienceDivExtra) {
            element.style.display = "none";
        }
        for (let element of professionalExperienceInputExtra) {
            element.style.display = "none";
        }
        for (let element of eraseprofessionalExperience) {
            element.style.display = "none";
        }
        for (let element of addprofessionalExperience) {
            element.style.display = "none";
        }
        addprofessionalExperience[0].style.display = "inline-block";


        qualificationsText.innerHTML = 'Descreva suas qualificações';
        for (let element of qualificationsTextExtra) {
            element.innerHTML = "";
        }
        for (let element of qualificationsDivExtra) {
            element.style.display = "none";
        }
        for (let element of qualificationsInputExtra) {
            element.style.display = "none";
        }
        for (let element of eraseQualifications) {
            element.style.display = "none";
        }
        for (let element of addQualifications) {
            element.style.display = "none";
        }
        addQualifications[0].style.display = "inline-block";
        
        profileText.innerHTML = 'Descreva o seu perfil';

        additionalInformationsText.innerHTML = 'Cite as informações adicionais que acredite que são relevantes';
        for (let element of additionalInformationsTextExtra) {
            element.innerHTML = "";
        }
        for (let element of additionalInformationsDivExtra) {
            element.style.display = "none";
        }
        for (let element of additionalInformationsInputExtra) {
            element.style.display = "none";
        }
        for (let element of eraseInformations) {
            element.style.display = "none";
        }
        for (let element of addInformations) {
            element.style.display = "none";
        }
        addInformations[0].style.display = "inline-block";
    }

    //2. TEXT COLOR
    //TÍTULOS:
    var textColor = document.getElementsByClassName("textColorContent");
    var titles = document.querySelectorAll("#pageContainer h2")

    //2.1. RED

    for (let element of titles) {
        textColor[0].addEventListener("click", textRedFunction);
        function textRedFunction() {
            element.style.color = "red";
        }
    }

    //2.2. GREEN

    for (let element of titles) {
        textColor[1].addEventListener("click", textGreenFunction);
        function textGreenFunction() {
            element.style.color = "green";
        }
    }

    //2.3. BLUE

    for (let element of titles) {
        textColor[2].addEventListener("click", textBlueFunction);
        function textBlueFunction() {
            element.style.color = "darkblue";
        }
    }

    //2.4. YELLOW

    for (let element of titles) {
        textColor[3].addEventListener("click", textYellowFunction);
        function textYellowFunction() {
            element.style.color = "gold";
        }
    }

    //2.5. ORANGE

    for (let element of titles) {
        textColor[4].addEventListener("click", textOrangeFunction);
        function textOrangeFunction() {
            element.style.color = "orange";
        }
    }

    //2.6. PURPLE

    for (let element of titles) {
        textColor[5].addEventListener("click", textPurpleFunction);
        function textPurpleFunction() {
            element.style.color = "purple";
        }
    }

    //2.7. BROWN

    for (let element of titles) {
        textColor[6].addEventListener("click", textBrownFunction);
        function textBrownFunction() {
            element.style.color = "brown";
        }
    }

    //2.8. BLACK

    for (let element of titles) {
        textColor[7].addEventListener("click", textBlackFunction);
        function textBlackFunction() {
            element.style.color = "black";
        }
    }

    //NOME:
    var nameText = document.getElementById("nameText");

    //2.9. RED

    textColor[8].addEventListener("click", () => {
        nameText.style.color = "red"
    });

    //2.10. GREEN

    textColor[9].addEventListener("click", () => {
        nameText.style.color = "green"
    });

    //2.11. BLUE
    
    textColor[10].addEventListener("click", () => {
        nameText.style.color = "darkblue"
    });

    //2.12. YELLOW
    
    textColor[11].addEventListener("click", () => {
        nameText.style.color = "gold"
    });

    //2.13. ORANGE

    textColor[12].addEventListener("click", () => {
        nameText.style.color = "orange"
    });

    //2.14. PURPLE

    textColor[13].addEventListener("click", () => {
        nameText.style.color = "purple"
    });

    //2.15. BROWN

    textColor[14].addEventListener("click", () => {
        nameText.style.color = "brown"
    });

    //2.16. BLACK

    textColor[15].addEventListener("click", () => {
        nameText.style.color = "black"
    });

    //3. TEXT FORMATTING

    //3.1. FONT SIZE

    var textSizeChangerTitles = document.getElementsByClassName("textSizeChangerTitles");

    var textSizeChangerParagraphs = document.getElementsByClassName("textSizeChangerParagraphs");

    //3.1.1. SMALL FONT SIZE

    let smallFontSize = document.getElementById("smallFontSize");

    smallFontSize.addEventListener("click", smallFontSizeFunction);

    function smallFontSizeFunction() {

        nameText.style.fontSize = "1.0em";

        for (let element of textSizeChangerTitles) {
            element.style.fontSize = "0.85em";
        }

        for (let element of textSizeChangerParagraphs) {
            element.style.fontSize = "0.55em";
        }

        for (let element of marker){
            element.style.fontSize = "1.3em"
        }
    }

    //3.1.2. MEDIUM FONT SIZE

    let mediumFontSize = document.getElementById("mediumFontSize");

    mediumFontSize.addEventListener("click", mediumFontSizeFunction);

    function mediumFontSizeFunction() {

        nameText.style.fontSize = "1.2em";

        for (let element of textSizeChangerTitles) {
            element.style.fontSize = "1.0em";
        }

        for (let element of textSizeChangerParagraphs) {
            element.style.fontSize = "0.7em";
        }

        for (let element of marker){
            element.style.fontSize = "1.5em"
        }
    }

    //3.1.3. LARGE FONT SIZE

    let largeFontSize = document.getElementById("largeFontSize");

    largeFontSize.addEventListener("click", largeFontSizeFunction);

    function largeFontSizeFunction() {

        nameText.style.fontSize = "1.3em";

        for (let element of textSizeChangerTitles) {
            element.style.fontSize = "1.1em";
        }

        for (let element of textSizeChangerParagraphs) {
            element.style.fontSize = "0.8em";
        }

        for (let element of marker){
            element.style.fontSize = "1.7em"
        }
    }

    //3.2. FONT TYPE

    var pageContainer = document.getElementById("pageContainer");

    //3.2.1. TIMES NEW ROMAN

    let timesFontType = document.getElementById("timesFontType");

    timesFontType.addEventListener("click", timesFontTypeFunction);

    function timesFontTypeFunction() {
        pageContainer.style.fontFamily = "'Times New Roman'";
    }

    //3.2.2. ARIAL

    let arialFontType = document.getElementById("arialFontType");

    arialFontType.addEventListener("click", arialFontTypeFunction);

    function arialFontTypeFunction() {
        pageContainer.style.fontFamily = "Arial";
    }

    //3.2.3. VERDANA

    let verdanaFontType = document.getElementById("verdanaFontType");

    verdanaFontType.addEventListener("click", verdanaFontTypeFunction);

    function verdanaFontTypeFunction() {
        pageContainer.style.fontFamily = "Verdana";
    }

    //4. DECORATION - MARKER COLOR

    var decorationColorContent2 = document.getElementsByClassName("decorationColorContent2");
    var marker = document.getElementsByClassName("marker")

    //4.1. RED

    for (let element of marker) {
        decorationColorContent2[0].addEventListener("click", markerRed);
        function markerRed() {
            element.style.color = 'red';
            element.style.display = 'inline';
        }
    }

    //4.2. GREEN

    for (let element of marker) {
        decorationColorContent2[1].addEventListener("click", markerGreen);
        function markerGreen() {
            element.style.color = 'green';
            element.style.display = 'inline';
        }
    }

    //4.3. BLUE

    for (let element of marker) {
        decorationColorContent2[2].addEventListener("click", markerBlue);
        function markerBlue() {
            element.style.color = 'darkblue';
            element.style.display = 'inline';
        }
    }

    //4.4. YELLOW

    for (let element of marker) {
        decorationColorContent2[3].addEventListener("click", markerYellow);
        function markerYellow() {
            element.style.color = 'gold';
            element.style.display = 'inline';
        }
    }

    //4.5. ORANGE

    for (let element of marker) {
        decorationColorContent2[4].addEventListener("click", markerOrange);
        function markerOrange() {
            element.style.color = 'orange';
            element.style.display = 'inline';
        }
    }

    //4.6. PURPLE

    for (let element of marker) {
        decorationColorContent2[5].addEventListener("click", markerPurple);
        function markerPurple() {
            element.style.color = 'purple';
            element.style.display = 'inline';
        }
    }

    //4.7. BROWN

    for (let element of marker) {
        decorationColorContent2[6].addEventListener("click", markerBrown);
        function markerBrown() {
            element.style.color = 'brown';
            element.style.display = 'inline';
        }
    }

    //4.8. BLACK

    for (let element of marker) {
        decorationColorContent2[7].addEventListener("click", markerBlack);
        function markerBlack() {
            element.style.color = 'black';
            element.style.display = 'inline';
        }
    }

    //4.9. NONE

    for (let element of marker) {
        decorationColorContent2[8].addEventListener("click", markerNone);
        function markerNone() {
            element.style.color = 'black';
            element.style.display = 'none';
        }
    }

    //5. DECORATION LINE

    var lineSelector = document.getElementById("lineSelector");
    var horizontalLine = document.getElementsByClassName("horizontalLine");

    for (let element of horizontalLine) {
        lineSelector.addEventListener("change", lineFunction);
        function lineFunction() {
            if (lineSelector.value == "yes") {
                element.style.display = "block"
            }
            else {
                element.style.display = "none"
            }
        }
    }

    //6. PRINT SECTION

    let printSectionContainer = document.getElementById("printSectionContainer");

    printSectionContainer.addEventListener("click", printFunction);

    function printFunction() {
        window.print();
    }

}
