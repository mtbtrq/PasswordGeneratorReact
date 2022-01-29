import React from "react";

const Generator = () => {

    const handleClick = () => {
        const length = document.getElementById("length").value;

        const options = {
            symbols: document.getElementById("symbols-checkbox").checked,
            numbers: document.getElementById("numbers-checkbox").checked,
            uppercase: document.getElementById("uppercase-checkbox").checked
        }

        const uppercase = ["A", "B", "C", "D", 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', "W", 'X', 'Y', 'Z'];
        const numbers = ["1", "2", "3", "4", "5", "6", "8", "8", "9", "0"];
        const symbols = ["!", "@", "#", "$"];

        const combinations = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        if (options.symbols) for (const symbol of symbols) combinations.push(symbol);
        if (options.uppercase) for (const letter of uppercase) combinations.push(letter);
        if (options.numbers) for (const number of numbers) combinations.push(number);

        let password = [];

        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * combinations.length);
            const character = combinations[index];
            password.push(character);
        }

        const passOutEl = document.getElementById("password-output");
        passOutEl.textContent = `Output: ${password.join("")}`
    }

    return (
        <div id="generator">
            <label htmlFor="symbols-checkbox">Include Symbols? (e.g: @, !, #, etc.)</label>
            <input type="checkbox" name="symbols-checkbox" id="symbols-checkbox"/>
            <br />

            <label htmlFor="numbers-checkbox">Include Numbers? (e.g: 1, 5, 8, etc.)</label>
            <input type="checkbox" name="numbers-checkbox" id="numbers-checkbox"/>
            <br />

            <label htmlFor="uppercase-checkbox">Include Uppercase Letters? (e.g: A, B, C, etc.)</label>
            <input type="checkbox" name="uppercase-checkbox" id="uppercase-checkbox"/>
            <br />

            <script>
                {
                    window.addEventListener("DOMContentLoaded", () => {
                        const length = document.getElementById("length");
                        const lengthLabel = document.getElementById("length-label");

                        length.value = 10;

                        length.addEventListener("change", () => {
                            lengthLabel.textContent = `Length: ${length.value}`;
                        });
                    })
                }
            </script>

            <br />
            <label htmlFor="length" id="length-label">Length: 10</label>
            <br />
            <input type="range" min="5" max="50" id="length" name="length"/>
            <br />

            <h3 id="password-output"></h3>

            <br />
            <button onClick={handleClick}>Generate Password</button>
        </div>
    );
};

export default Generator;