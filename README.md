# 🪨📄✂️ Rock-Paper-Scissors Game

A simple **Rock-Paper-Scissors** game built using **JavaScript** for the browser console. The game pits a human player against a computer, and both make their choices in each round. The game is played for **5 rounds**, and the winner is declared based on the final score.

---

## 📋 How to Play

1. Run the code in your browser's **Developer Console** (press `F12` or `Ctrl + Shift + I` and go to the **Console** tab).
2. When prompted, type your choice:  
   - `rock`  
   - `paper`  
   - `scissors`  
3. The computer randomly selects its choice.
4. The result of each round is displayed in the console.
5. After 5 rounds, the final score and the overall winner are announced.

---

## 🎮 Game Rules

- **Rock beats Scissors**
- **Paper beats Rock**
- **Scissors beats Paper**
- If both choices are the same, it's a **tie**

---

## 📌 Features

- Random computer choice generation
- User input via browser prompt
- Score tracking for both the human player and computer
- 5 rounds of play per session
- Round-by-round result display
- Final game result announcement

---

## 💻 Technologies Used

- **HTML (for browser environment)**
- **JavaScript**

---

## 📝 How It Works

- `getComputerChoice()` generates a random number and maps it to `rock`, `paper`, or `scissors`.
- `getUserChoice()` prompts the user to enter their choice.
- `playRound()` compares the choices and updates the scores.
- `playGame()` manages the game flow, loops over 5 rounds, and announces the final result.

---

## 📸 Sample Output (in Console)

