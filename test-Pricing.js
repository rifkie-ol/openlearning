const starterMonthlyValueAud = document.getElementById("starter-monthly-value-aud")
const institutionMonthlyValueAud = document.getElementById("institution-monthly-value-aud")
const starterYearlyValueAud = document.getElementById("starter-yearly-value-aud")
const institutionYearlyValueAud = document.getElementById("institution-yearly-value-aud")

const starterMonthlyValueSgd = document.getElementById("starter-monthly-value-sgd")
const institutionMonthlyValueSgd = document.getElementById("institution-monthly-value-sgd")
const starterYearlyValueSgd = document.getElementById("starter-yearly-value-sgd")
const institutionYearlyValueSgd = document.getElementById("institution-yearly-value-sgd")

const starterMonthlyValueUsd = document.getElementById("starter-monthly-value-usd")
const institutionMonthlyValueUsd = document.getElementById("institution-monthly-value-usd")
const starterYearlyValueUsd = document.getElementById("starter-yearly-value-usd")
const institutionYearlyValueUsd = document.getElementById("institution-yearly-value-usd")

const institutionYearlyValueMyr = document.getElementById("institution-yearly-value-myr")
const institutionMonthlyValueMyr = document.getElementById("institution-monthly-value-myr")

const institutionYearlyValueIdr = document.getElementById("institution-yearly-value-idr")
const institutionMonthlyValueIdr = document.getElementById("institution-monthly-value-idr")

const allRadioStarterAud = document.getElementsByName('radio-starter-aud')
const allRadioStarterUsd = document.getElementsByName('radio-starter-usd')
const allRadioStarterSgd = document.getElementsByName('radio-starter-sgd')
const allRadioInstitutionAud = document.getElementsByName('radio-institution-aud')
const allRadioInstitutionUsd = document.getElementsByName('radio-institution-usd')
const allRadioInstitutionSgd = document.getElementsByName('radio-institution-sgd')
const allRadioInstitutionMyr = document.getElementsByName('radio-institution-myr')
const allRadioInstitutionIdr = document.getElementsByName('radio-institution-idr')
//Educator for AUD
const educatorStarterMonthlyValueAud = document.getElementById('educator-starter-monthly-value-aud')
const educatorInstitutionMonthlyValueAud = document.getElementById('educator-institution-monthly-value-aud')
const educatorStarterYearlyValueAud = document.getElementById('educator-starter-yearly-value-aud')
const educatorInstitutionYearlyValueAud = document.getElementById('educator-institution-yearly-value-aud')

const educatorStarterMonthlyValueUsd = document.getElementById('educator-starter-monthly-value-usd')
const educatorInstitutionMonthlyValueUsd = document.getElementById('educator-institution-monthly-value-usd')
const educatorStarterYearlyValueUsd = document.getElementById('educator-starter-yearly-value-usd')
const educatorInstitutionYearlyValueUsd = document.getElementById('educator-institution-yearly-value-usd')

const educatorStarterMonthlyValueSgd = document.getElementById('educator-starter-monthly-value-sgd')
const educatorInstitutionMonthlyValueSgd = document.getElementById('educator-institution-monthly-value-sgd')
const educatorStarterYearlyValueSgd = document.getElementById('educator-starter-yearly-value-sgd')
const educatorInstitutionYearlyValueSgd = document.getElementById('educator-institution-yearly-value-sgd')
//Educator for MYR
const educatorInstitutionMonthlyValueMyr = document.getElementById('educator-institution-monthly-value-myr')
const educatorInstitutionYearlyValueMyr = document.getElementById('educator-institution-yearly-value-myr')

const educatorInstitutionMonthlyValueIdr = document.getElementById('educator-institution-monthly-value-idr')
const educatorInstitutionYearlyValueIdr = document.getElementById('educator-institution-yearly-value-idr')
//Learners for AUD
const learnersStarterMonthlyValueAud = document.getElementById('learners-starter-monthly-value-aud')
const learnersInstitutionMonthlyValueAud = document.getElementById('learners-institution-monthly-value-aud')
const learnersStarterYearlyValueAud = document.getElementById('learners-starter-yearly-value-aud')
const learnersInstitutionYearlyValueAud = document.getElementById('learners-institution-yearly-value-aud')

const learnersStarterMonthlyValueSgd = document.getElementById('learners-starter-monthly-value-sgd')
const learnersInstitutionMonthlyValueSgd = document.getElementById('learners-institution-monthly-value-sgd')
const learnersStarterYearlyValueSgd = document.getElementById('learners-starter-yearly-value-sgd')
const learnersInstitutionYearlyValueSgd = document.getElementById('learners-institution-yearly-value-sgd')

const learnersStarterMonthlyValueUsd = document.getElementById('learners-starter-monthly-value-usd')
const learnersInstitutionMonthlyValueUsd = document.getElementById('learners-institution-monthly-value-usd')
const learnersStarterYearlyValueUsd = document.getElementById('learners-starter-yearly-value-usd')
const learnersInstitutionYearlyValueUsd = document.getElementById('learners-institution-yearly-value-usd')
//Learners for MYR
const learnersInstitutionMonthlyValueMyr = document.getElementById('learners-institution-monthly-value-myr')
const learnersInstitutionYearlyValueMyr = document.getElementById('learners-institution-yearly-value-myr')

const learnersInstitutionMonthlyValueIdr = document.getElementById('learners-institution-monthly-value-idr')
const learnersInstitutionYearlyValueIdr = document.getElementById('learners-institution-yearly-value-idr')

const dataPricing = [
    {
        level: 1,
        pricingMonthlyAud: 475,
        pricingYearlyAud: "4,750",
        pricingMonthlyUsd: 345,
        pricingYearlyUsd: "3,450",
        pricingMonthlySgd: 475,
        pricingYearlySgd: "4,750",
        educators: 5,
        learners: 500,
    },
    {
        level: 2,
        pricingMonthlyAud: 700,
        pricingYearlyAud: "7,000",
        pricingMonthlyUsd: 500,
        pricingYearlyUsd: "5,000",
        pricingMonthlySgd: 700,
        pricingYearlySgd: "7,000",
        educators: 10,
        learners: 750,
    },
    {
        level: 3,
        pricingMonthlyAud: 900,
        pricingYearlyAud: "9,000",
        pricingMonthlyUsd: 650,
        pricingYearlyUsd: "6,500",
        pricingMonthlySgd: 900,
        pricingYearlySgd: "9,000",
        pricingMonthlyMyr: "2,333",
        pricingYearlyMyr: "20,000",
        pricingMonthlyIdr: "7,8jt",
        pricingYearlyIdr: "67jt",
        educators: 25,
        learners: "1,000"
    },
    {
        level: 4,
        pricingMonthlyAud: "1,350",
        pricingYearlyAud: "13,500",
        pricingMonthlyUsd: 975,
        pricingYearlyUsd: "9,750",
        pricingMonthlySgd: "1,350",
        pricingYearlySgd: "13,500",
        pricingMonthlyMyr: "2,625",
        pricingYearlyMyr: "22,500",
        pricingMonthlyIdr: "8,7jt",
        pricingYearlyIdr: "75jt",
        educators: "Unlimited",
        learners: "1,500"
    },
    {
        level: 5,
        pricingMonthlyAud: "1,700",
        pricingYearlyAud: "17,000",
        pricingMonthlyUsd: "1,200",
        pricingYearlyUsd: "12,000",
        pricingMonthlySgd: "1,700",
        pricingYearlySgd: "17,000",
        pricingMonthlyMyr: "3,500",
        pricingYearlyMyr: "30,000",
        pricingMonthlyIdr: "11,7jt",
        pricingYearlyIdr: "100jt",
        educators: "Unlimited",
        learners: "2,000"
    },
    {
        level: 6,
        pricingMonthlyAud: "2,500",
        pricingYearlyAud: "25,000",
        pricingMonthlyUsd: "1,750",
        pricingYearlyUsd: "17,500",
        pricingMonthlySgd: "2,500",
        pricingYearlySgd: "25,000",
        pricingMonthlyMyr: "5,250",
        pricingYearlyMyr: "45,000",
        pricingMonthlyIdr: "17,5jt",
        pricingYearlyIdr: "150jt",
        educators: "Unlimited",
        learners: "3,000"
    },
    {
        level: 7,
        pricingMonthlyAud: "3,300",
        pricingYearlyAud: "33,000",
        pricingMonthlyUsd: "2,250",
        pricingYearlyUsd: "22,500",
        pricingMonthlySgd: "3,300",
        pricingYearlySgd: "33,000",
        pricingMonthlyIdr: "18,7jt",
        pricingYearlyIdr: "160jt",
        pricingMonthlyMyr: "5,600",
        pricingYearlyMyr: "48,000",
        educators: "Unlimited",
        learners: "4,000"
    },
    {
        level: 8,
        pricingMonthlyMyr: 875,
        pricingYearlyMyr: "7,500",
        pricingMonthlyIdr: "2,9jt",
        pricingYearlyIdr: "25jt",
        educators: 5,
        learners: 300
    },
    {
        level: 9,
        pricingMonthlyMyr: "1,400",
        pricingYearlyMyr: "12,000",
        pricingMonthlyIdr: "4,7jt",
        pricingYearlyIdr: "40jt",
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
allRadioStarterUsd.forEach((el) => {
    el.addEventListener('click', e => {
        console.log(e.target.value)
        if (e.target.value == 11 || e.target.value == 12) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorStarterMonthlyValueUsd.innerHTML = specificData.educators;
            educatorStarterYearlyValueUsd.innerHTML = specificData.educators;
            learnersStarterMonthlyValueUsd.innerHTML = specificData.learners;
            learnersStarterYearlyValueUsd.innerHTML = specificData.learners;
            starterMonthlyValueUsd.innerHTML = specificData.pricingMonthlyUsd
            starterYearlyValueUsd.innerHTML = specificData.pricingYearlyUsd
        } else {
            return
        }
    })
})
allRadioInstitutionUsd.forEach((el) => {
    el.addEventListener('click', e => {
        if (e.target.value >= 1 && e.target.value <= 7) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorInstitutionMonthlyValueUsd.innerHTML = specificData.educators;
            educatorInstitutionYearlyValueUsd.innerHTML = specificData.educators;
            learnersInstitutionMonthlyValueUsd.innerHTML = specificData.learners;
            learnersInstitutionYearlyValueUsd.innerHTML = specificData.learners;
            institutionMonthlyValueUsd.innerHTML = specificData.pricingMonthlyUsd
            institutionYearlyValueUsd.innerHTML = specificData.pricingYearlyUsd
        } else {
            return
        }
    })
})
allRadioStarterSgd.forEach((el) => {
    el.addEventListener('click', e => {
        console.log(e.target.value)
        if (e.target.value == 11 || e.target.value == 12) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorStarterMonthlyValueSgd.innerHTML = specificData.educators;
            educatorStarterYearlyValueSgd.innerHTML = specificData.educators;
            learnersStarterMonthlyValueSgd.innerHTML = specificData.learners;
            learnersStarterYearlyValueSgd.innerHTML = specificData.learners;
            starterMonthlyValueSgd.innerHTML = specificData.pricingMonthlySgd
            starterYearlyValueSgd.innerHTML = specificData.pricingYearlySgd
        } else {
            return
        }
    })
})
allRadioInstitutionSgd.forEach((el) => {
    el.addEventListener('click', e => {
        if (e.target.value >= 1 && e.target.value <= 7) {
            const specificData = dataPricing[e.target.value - 1]
            currentLevel = specificData.level;
            educatorInstitutionMonthlyValueSgd.innerHTML = specificData.educators;
            educatorInstitutionYearlyValueSgd.innerHTML = specificData.educators;
            learnersInstitutionMonthlyValueSgd.innerHTML = specificData.learners;
            learnersInstitutionYearlyValueSgd.innerHTML = specificData.learners;
            institutionMonthlyValueSgd.innerHTML = specificData.pricingMonthlySgd
            institutionYearlyValueSgd.innerHTML = specificData.pricingYearlySgd
        } else {
            return
        }
    })
})
allRadioInstitutionMyr.forEach((el) => {
     el.addEventListener('click', e => {
         if (e.target.value >= 3 && e.target.value <= 9) {
             const specificData = dataPricing[e.target.value - 1]
             currentLevel = specificData.level;
             educatorInstitutionMonthlyValueMyr.innerHTML = specificData.educators;
            educatorInstitutionYearlyValueMyr.innerHTML = specificData.educators;
            learnersInstitutionMonthlyValueMyr.innerHTML = specificData.learners;
            learnersInstitutionYearlyValueMyr.innerHTML = specificData.learners;
            institutionMonthlyValueMyr.innerHTML = specificData.pricingMonthlyMyr
            institutionYearlyValueMyr.innerHTML = specificData.pricingYearlyMyr
         } else {
             return
         }
     })
 })
 allRadioInstitutionIdr.forEach((el) => {
      el.addEventListener('click', e => {
          if (e.target.value >= 3 && e.target.value <= 9) {
              const specificData = dataPricing[e.target.value - 1]
              currentLevel = specificData.level;
              educatorInstitutionMonthlyValueIdr.innerHTML = specificData.educators;
             educatorInstitutionYearlyValueIdr.innerHTML = specificData.educators;
             learnersInstitutionMonthlyValueIdr.innerHTML = specificData.learners;
             learnersInstitutionYearlyValueIdr.innerHTML = specificData.learners;
             institutionMonthlyValueIdr.innerHTML = specificData.pricingMonthlyIdr
             institutionYearlyValueIdr.innerHTML = specificData.pricingYearlyIdr
          } else {
              return
          }
      })
  }
)
