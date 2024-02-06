

homeScreenEl = document.getElementById("home-screen-el")
guestScreenEl = document.getElementById("guest-screen-el")

homeScoreEl = document.getElementById("home-score-el")
guestScoreEl = document.getElementById("guest-score-el")

homeTimeoutEl = document.getElementById("home-to-el")
guestTimeoutEl = document.getElementById("guest-to-el")

homeFoulEl = document.getElementById("home-fo-el")
guestFoulEl = document.getElementById("guest-fo-el")

periodCounterEl = document.getElementById("period-counter")

homeScore = 0
guestScore = 0

homeTimeout = 0
guestTimeout = 0

homeFoul = 0
guestFoul = 0

periodCounter = 0

function incrementHome(amount) {
    homeScore += amount
    // safety measure in case when score gets ilogically high
    if(homeScore > 999){
        homeScoreEl.textContent = "Err"
        return
    }
    homeScoreEl.textContent = homeScore
    highlightLeadingTeam()
}

function incrementGuest(amount) {
    guestScore += amount
    if(guestScore > 999){
        guestScoreEl.textContent = "Err"
        return
    }
    guestScoreEl.textContent = guestScore
    highlightLeadingTeam()
}

function decrementHome(amount) {
    if(homeScore - amount < 0 && amount > 0){
        decrementHome(amount - 1)
        return
    }
    else if(amount <= 0){
        return
    }
    homeScore -= amount
    homeScoreEl.textContent = homeScore   
    highlightLeadingTeam()
}

function decrementGuest(amount) {
    if(guestScore - amount < 0 && amount > 0){
        decrementGuest(amount - 1)
        return
    }
    else if(amount <= 0){
        return
    }
    guestScore -= amount
    guestScoreEl.textContent = guestScore  
    highlightLeadingTeam() 
}

function addTimeoutHome(amount){
    if(homeTimeout + amount > 99){
        homeTimeoutEl.textContent = "Err"
        return
    }
    homeTimeout += amount
    homeTimeoutEl.textContent = homeTimeout
}

function removeTimeoutHome(amount){
    if(homeTimeout - amount < 0)  return
    homeTimeout -= amount
    homeTimeoutEl.textContent = homeTimeout
}

function addFoulHome(amount){
    if(homeFoul + amount > 99){
        homeFoulEl.textContent = "Err"
        return
    }
    homeFoul += amount
    homeFoulEl.textContent = homeFoul
}

function removeFoulHome(amount){
    if(homeFoul - amount < 0)  return
    homeFoul -= amount
    homeFoulEl.textContent = homeFoul
}

function addTimeoutGuest(amount){
    if(guestTimeout + amount > 99){
        guestTimeoutEl.textContent = "Err"
        return
    }
    guestTimeout += amount
    guestTimeoutEl.textContent = guestTimeout
}

function removeTimeoutGuest(amount){
    if(guestTimeout - amount < 0)  return
    guestTimeout -= amount
    guestTimeoutEl.textContent = guestTimeout
}

function addFoulGuest(amount){
    if(guestFoul + amount > 99){
        guestFoulEl.textContent = "Err"
        return
    }
    guestFoul += amount
    guestFoulEl.textContent = guestFoul
}

function removeFoulGuest(amount){
    if(guestFoul - amount < 0)  return
    guestFoul -= amount
    guestFoulEl.textContent = guestFoul
}

function highlightLeadingTeam() {
    if(homeScore > guestScore){
        homeScreenEl.classList.add("leading-team")
        guestScreenEl.classList.remove("leading-team")
    }
    else if(homeScore < guestScore){
        guestScreenEl.classList.add("leading-team")
        homeScreenEl.classList.remove("leading-team")
    }
    else{
        homeScreenEl.classList.add("leading-team")
        guestScreenEl.classList.add("leading-team")
    }
}

function incPeriodCounter() {
    if(periodCounter > 3) return // max of 4 periods
    periodCounter++
    periodCounterEl.textContent = periodCounter
}

function decPeriodCounter() {
    if(periodCounter < 1) return // min of 0 periods
    periodCounter--
    periodCounterEl.textContent = periodCounter
}

function newGame() {
    // homeScore = 0
    // guestScore = 0
    // homeFoul = 0
    // guestFoul = 0
    // homeTimeout = 0
    // guestTimeout = 0
    
    // homeFoulEl.textContent = homeFoul
    // guestFoulEl.textContent = guestFoul
    // homeTimeoutEl.textContent = homeTimeout
    // guestTimeoutEl.textContent = guestTimeout
    // homeScoreEl.textContent = homeScore
    // guestScoreEl.textContent = guestScore
    // homeScreenEl.classList.remove("leading-team")
    // guestScreenEl.classList.remove("leading-team")
    
    location.reload() // couldn't find a convenient way to also reset the timer from clicking same button
}