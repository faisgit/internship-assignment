<form action="calculate.php" method="post">
    <div>
        <label for="numberOne">Enter Your First Number :</label>
        <input type="number" name="numberOne" required>
    </div>
    <div>
        <label for="numberTwo">Enter Your Second Number: </label>
        <input type="number" name="numberTwo" required>
    </div>
    <div>
        <label for="operator">Operator</label>
        <select name="operator" required>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select>
    </div>

    <input type="submit" value="Calculate">

</form>