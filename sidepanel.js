// loading content 
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['reseachNotes'], function(result) {
        if (result.reseachNotes) {
            document.getElementById('notes').value = result.reseachNotes;
        }
    });

    document.getElementById('summarizeBtn').addEventListener('click', textSummarize);
    // save notes 
    document.getElementById('saveNotesBtn').addEventListener('click', saveNotes);
   
});

async function textSummarize() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        // Check if the active tab URL is allowed
        if (tab.url.startsWith('chrome://')) {
            showResult('Summarization is not supported on this page.');
            return;
        }
        
        const [{result}] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => window.getSelection().toString()
        }); 
        
        if (!result) { 
            showResult('Please select text to summarize');
            return;
        }
        
        const url = 'http://localhost:8080/api/research/process';
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: result, operation: 'summarize' })
        });
        
        if (!response.ok) {
            throw new Error(`Error in text summarization: ${response.status}`);
        }
        
        const text = await response.text();
        showResult(text.replace(/\n/g, '<br>'));
    } catch (error) {
        console.error('Error in text summarization:', error);
        alert('An error occurred while summarizing the text');
    }
}


async function saveNotes() {
    let notes = document.getElementById('notes').value;
    chrome.storage.local.set({ reseachNotes: notes });
    alert('Notes saved successfully!');
}


function showResult(content){
    document.getElementById('results').innerHTML =`<div class = "result-item"> <div class="result-content"> ${content} </div></div>`;
}



