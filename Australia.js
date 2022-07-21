const starterMonthlyValueAud = document.getElementById("starter-monthly-value-aud")
const institutionMonthlyValueAud = document.getElementById("institution-monthly-value-aud")
const starterYearlyValueAud = document.getElementById("starter-yearly-value-aud")
const institutionYearlyValueAud = document.getElementById("institution-yearly-value-aud")

const allRadioStarterAud = document.getElementsByName('radio-starter-aud')
const allRadioInstitutionAud = document.getElementsByName('radio-institution-aud')
const allRadioGrowthMyr = document.getElementsByName('radio-growth-myr')
const allRadioProMyr = document.getElementsByName('radio-pro-myr')
const allRadioInstitutionMyr = document.getElementsByName('radio-institution-myr')
//Educator for AUD
const educatorStarterMonthlyValueAud = document.getElementById('educator-starter-monthly-value-aud')
const educatorInstitutionMonthlyValueAud = document.getElementById('educator-institution-monthly-value-aud')
const educatorStarterYearlyValueAud = document.getElementById('educator-starter-yearly-value-aud')
const educatorInstitutionYearlyValueAud = document.getElementById('educator-institution-yearly-value-aud')
//Educator for MYR
const educatorGrowthMonthlyValueMyr = document.getElementById('educator-growth-monthly-value-myr')
const educatorProMonthlyValueMyr = document.getElementById('educator-pro-monthly-value-myr')
const educatorInstitutionMonthlyValueMyr = document.getElementById('educator-institution-monthly-value-myr')
const educatorGrowthYearlyValueMyr = document.getElementById('educator-growth-yearly-value-myr')
const educatorProYearlyValueMyr = document.getElementById('educator-pro-yearly-value-myr')
const educatorInstitutionYearlyValueMyr = document.getElementById('educator-institution-yearly-value-myr')
//Learners for AUD
const learnersStarterMonthlyValueAud = document.getElementById('learners-starter-monthly-value-aud')
const learnersInstitutionMonthlyValueAud = document.getElementById('learners-institution-monthly-value-aud')
const learnersStarterYearlyValueAud = document.getElementById('learners-starter-yearly-value-aud')
const learnersInstitutionYearlyValueAud = document.getElementById('learners-institution-yearly-value-aud')
//Learners for MYR
const learnersGrowthMonthlyValueMyr = document.getElementById('learners-growth-monthly-value-myr')
const learnersProMonthlyValueMyr = document.getElementById('learners-pro-monthly-value-myr')
const learnersInstitutionMonthlyValueMyr = document.getElementById('learners-institution-monthly-value-myr')
const learnersGrowthYearlyValueMyr = document.getElementById('learners-growth-yearly-value-myr')
const learnersProYearlyValueMyr = document.getElementById('learners-pro-yearly-value-myr')
const learnersInstitutionYearlyValueMyr = document.getElementById('learners-institution-yearly-value-myr')

const dataPricing = [
    {
        level: 1,
        pricingMonthlyAud: 475,
        pricingYearlyAud: "4,750",
        educators: 5,
        learners: 500
    },
    {
        level: 2,
        pricingMonthlyAud: 700,
        pricingYearlyAud: "7,000",
        educators: 10,
        learners: 750
    },
    {
        level: 3,
        pricingMonthlyAud: 900,
        pricingYearlyAud: "9,000",
        pricingMonthlyMyr: "2,333",
        pricingYearlyMyr: "20,000",
        educators: 25,
        learners: "1,000"
    },
    {
        level: 4,
        pricingMonthlyAud: "1,350",
        pricingYearlyAud: "13,500",
        pricingMonthlyMyr: "2,625",
        pricingYearlyMyr: "22,500",
        educators: "Unlimited",
        learners: "1,500"
    },
    {
        level: 5,
        pricingMonthlyAud: "1,700",
        pricingYearlyAud: "17,000",
        pricingMonthlyMyr: "3,500",
        pricingYearlyMyr: "30,000",
        educators: "Unlimited",
        learners: "2,000"
    },
    {
        level: 6,
        pricingMonthlyAud: "2,500",
        pricingYearlyAud: "25,000",
        pricingMonthlyMyr: "5,250",
        pricingYearlyMyr: "45,000",
        educators: "Unlimited",
        learners: "3,000"
    },
    {
        level: 7,
        pricingMonthlyAud: "3,300",
        pricingYearlyAud: "33,000",
        pricingMonthlyMyr: "5,600",
        pricingYearlyMyr: "48,000",
        educators: "Unlimited",
        learners: "4,000"
    },
    {
        level: 8,
        pricingMonthlyMyr: 875,
        pricingYearlyMyr: "7,500",
        educators: 5,
        learners: 300
    },
    {
        level: 9,
        pricingMonthlyMyr: "1,400",
        pricingYearlyMyr: "12,000",
        educators: 15,
        learners: 500
    },
    {
        level: 10,
        pricingMonthlyMyr: "1,400",
        pricingYearlyMyr: "12,000",
        educators: 15,
        learners: 500
    },
    {
        level: 11,
        pricingMonthlyAud: 125,
        pricingYearlyAud: "1,250",
        educators: 2,
        learners: 100
    },
    {
        level: 12,
        pricingMonthlyAud: 250,
        pricingYearlyAud: "2,500",
        educators: 2,
        learners: 250
    },

]


let currentLevel = 1;
//Price Starter Monthly AUD
let currentStarterMonthlyPrice = 125;
starterMonthlyValueAud.innerHTML = currentStarterMonthlyPrice
educatorStarterMonthlyValueAud.innerHTML = 2
educatorStarterYearlyValueAud.innerHTML = 2
learnersStarterMonthlyValueAud.innerHTML = 100
learnersStarterYearlyValueAud.innerHTML = 100
//Price Institution Montly
let currentInstitutionMonthlyPrice = 475
institutionMonthlyValueAud.innerHTML = currentInstitutionMonthlyPrice
educatorInstitutionMonthlyValueAud.innerHTML = 5
educatorInstitutionYearlyValueAud.innerHTML = 5
learnersInstitutionMonthlyValueAud.innerHTML = 500
learnersInstitutionYearlyValueAud.innerHTML = 500

allRadioStarterAud.forEach((el) => {
    el.addEventListener('click', e => {
        console.log(e.target.value)
        if (e.target.value == 11 || e.target.value == 12) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorStarterMonthlyValueAud.innerHTML = specificData.educators;
            educatorStarterYearlyValueAud.innerHTML = specificData.educators;
            learnersStarterMonthlyValueAud.innerHTML = specificData.learners;
            learnersStarterYearlyValueAud.innerHTML = specificData.learners;
            starterMonthlyValueAud.innerHTML = specificData.pricingMonthlyAud
            starterYearlyValueAud.innerHTML = specificData.pricingYearlyAud
        } else {
            return
        }
    })
})
allRadioInstitutionAud.forEach((el) => {
    el.addEventListener('click', e => {
        if (e.target.value >= 1 && e.target.value <= 7) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorInstitutionMonthlyValueAud.innerHTML = specificData.educators;
            educatorInstitutionYearlyValueAud.innerHTML = specificData.educators;
            learnersInstitutionMonthlyValueAud.innerHTML = specificData.learners;
            learnersInstitutionYearlyValueAud.innerHTML = specificData.learners;
            institutionMonthlyValueAud.innerHTML = specificData.pricingMonthlyAud
            institutionYearlyValueAud.innerHTML = specificData.pricingYearlyAud
        } else {
            return
        }
    })
})
// allRadioGrowthMyr.forEach((el) => {
//     el.addEventListener('click', e => {
//         if (e.target.value >= 3 && e.target.value <= 9) {
//             const specificData = dataPricing[e.target.value - 1]
//             currentLevel = specificData.level;
//             currentGrowthMonthlyPriceMyr = specificData.pricingMonthlyMyr;
//             currentGrowthYearlyPriceMyr = specificData.pricingYearlyMyr;
//             educatorGrowthMonthlyValueMyr.innerHTML = specificData.educators;
//             learnersGrowthMonthlyValueMyr.innerHTML = specificData.learners;
//             growthMonthlyValueMyr.innerHTML = currentGrowthMonthlyPriceMyr
//             growthYearlyValueMyr.innerHTML = currentGrowthYearlyPriceMyr
//         } else {
//             return
//         }
//     })
// }
// allRadioProMyr.forEach((el) => {
//     el.addEventListener('click', e => {
//         if (e.target.value >= 3 && e.target.value <= 9) {
//             const specificData = dataPricing[e.target.value - 1]
//             currentLevel = specificData.level;
//             currentProMonthlyPriceMyr = specificData.pricingMonthlyMyr;
//             currentProYearlyPriceMyr = specificData.pricingYearlyMyr;
//             educatorProMonthlyValueMyr.innerHTML = specificData.educators;
//             learnersProMonthlyValueMyr.innerHTML = specificData.learners;
//             proMonthlyValueMyr.innerHTML = currentProMonthlyPriceMyr
//             proYearlyValueMyr.innerHTML = currentProYearlyPriceMyr
//         } else {
//             return
//         }
//     })
// }
// allRadioInstitutionMyr.forEach((el) => {
//     el.addEventListener('click', e => {
//         if (e.target.value >= 3 && e.target.value <= 9) {
//             const specificData = dataPricing[e.target.value - 1]
//             currentLevel = specificData.level;
//             currentInstitutionMonthlyPriceMyr = specificData.pricingMonthlyMyr;
//             currentInstitutionYearlyPriceMyr = specificData.pricingYearlyMyr;
//             educatorInstitutionMonthlyValueMyr.innerHTML = specificData.educators;
//             learnersInstitutionMonthlyValueMyr.innerHTML = specificData.learners;
//             institutionMonthlyValueMyr.innerHTML = currentInstitutionMonthlyPriceMyr
//             institutionYearlyValueMyr.innerHTML = currentInstitutionYearlyPriceMyr
//         } else {
//             return
//         }
//     })
// }
// )
