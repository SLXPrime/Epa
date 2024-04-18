const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req, res) => {
    res.send('Server returned');
});

app.post("/set/Contact", async (req, res) => {
    const { Builder, By } = require("selenium-webdriver");
    (async function epa() {
        let driver = await new Builder().forBrowser("chrome").build();
        if (req.body.TOKEN != process.env.SECURITY_TOKEN) {
            
        } else {
            await driver.get(
                req.body.PainelURL
            );
            try {
                await driver
                    .findElement(By.xpath("//input[contains(@id, 'input-17')]"))
                    .sendKeys(req.body.name);
                await driver
                    .findElement(By.xpath("//input[contains(@id, 'input-20')]"))
                    .sendKeys(req.body.email);
                await driver
                    .findElement(By.xpath("//input[contains(@id, 'input-25')]"))
                    .sendKeys(req.body.telefone);
                await driver
                    .findElement(By.xpath("//textarea[contains(@id, 'input-28')]"))
                    .sendKeys(req.body.msg);
                await driver
                    .findElement(By.xpath("//button[contains(@type, 'submit')]"))
                    .click();
                await setTimeout(() => {
                    console.log("close Driver");
                }, 10000);
            } finally {
                driver.quit();
            }
        }

    })();

    return res.sendStatus(200)
});
app.post('/api/teste', (req, res) => {
    console.dir(req.body)
    res.json('teste')
})
app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
});