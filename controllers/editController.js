const database=require('../database/db')



// Promisify the database query method for async/await usage
const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        database.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

exports.geteditcont= async (req, res) => {
    const id = req.params.id;
    try {
        const sql = "SELECT * FROM appoiment WHERE id=?";
        const result = await query(sql, [id]);
        res.render("edit", { appoiment: result });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching appointment for editing');
    }
}
exports.postEditCont= async (req, res) => {
    const id = req.params.id;
    const { name, email, phoneNumber } = req.body;

    try {
        const sql = "UPDATE appoiment SET name=?, email=?, phoneNumber=? WHERE id=?";
        await query(sql, [name, email, phoneNumber, id]);
        res.redirect("/show-appointments");
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating the appointment');
    }
}