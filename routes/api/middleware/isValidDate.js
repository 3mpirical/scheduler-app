
const isValidDate = (req, res, next) => {
    const day   = req.body.dateExecuting.day;
    const month = req.body.dateExecuting.month;
    const year  = req.body.dateExecuting.year;
    const date = new Date(year, month, day);


    (date.getFullYear() == year
    && date.getMonth() == month
    && date.getDate() == day)
    ? next()
    : res.status(400)
        .json({
            isSuccessful: false,
            responseText: "bad request",
            data: `Date is invalid: ${JSON.stringify(req.body.dateExecuting, null, 2)}`,
        });
};


module.exports = isValidDate;
