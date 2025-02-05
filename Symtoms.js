
    // Retrieve data
    const symptom = sessionStorage.getItem('selectedSymptom');
    const answers = JSON.parse(sessionStorage.getItem('symptomAnswers'));

    // Personalized recommendation logic
    let recommendation = "Here’s your personalized advice: ";

    if (symptom === 'cold') {
        recommendation += "For your cold: ";
        if (answers[0].toLowerCase() === 'yes') {
            recommendation += "You have a fever. Take rest and consider paracetamol. ";
        }
        if (answers[1].toLowerCase() === 'yes') {
            recommendation += "Use throat lozenges for sore throat. ";
        }
        if (parseInt(answers[2]) > 3) {
            recommendation += "Since symptoms persist beyond 3 days, consult a doctor.";
        }
    } 
    else if (symptom === 'headache') {
        recommendation += "For your headache: ";
        if (answers[0].toLowerCase().includes('throbbing')) {
            recommendation += "Throbbing pain may indicate migraines. Avoid bright lights. ";
        }
        if (answers[1].toLowerCase() === 'yes') {
            recommendation += "Sensitivity to light suggests migraines. ";
        }
        if (parseInt(answers[2]) >= 7) {
            recommendation += "Severe pain (7+/10): Consider consulting a doctor.";
        }
    } 
    else if (symptom === 'breathing') {
        recommendation += "For breathing issues: ";
        if (answers[0].toLowerCase() === 'yes') {
            recommendation += "Worsening with activity could indicate asthma. ";
        }
        if (answers[1].toLowerCase() === 'yes') {
            recommendation += "Chest pain requires urgent medical attention. ";
        }
        if (answers[2].toLowerCase() === 'yes') {
            recommendation += "Smoking may worsen breathing issues. ";
        }
    }

    // Display result
    document.getElementById('recommendation').innerText = recommendation;
