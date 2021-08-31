using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Interactions;

[TestFixture]
public class TesteCadastroAlunoTest {
    private IWebDriver driver;
    public IDictionary<string, object> vars {get; private set;}
    private IJavaScriptExecutor js;
    [SetUp]
    public void SetUp() {
        driver = new ChromeDriver();
        js = (IJavaScriptExecutor)driver;
        vars = new Dictionary<string, object>();
    }
    [TearDown]
    protected void TearDown() {
        driver.Quit();
    }

    private void paginaInicial()
    {
        driver.Navigate().GoToUrl("https://localhost:5001/swagger/index.html");
        Thread.Sleep(2000);
        driver.FindElement(By.XPath("//*[@id='details-button']")).Click();
        Thread.Sleep(2000);
        driver.FindElement(By.XPath("//*[@id='proceed-link']")).Click();
        driver.FindElement(By.CssSelector("body")).SendKeys(Keys.Control + "t");
        driver.SwitchTo().Window(driver.WindowHandles.Last());
        driver.Navigate().GoToUrl("http://localhost:8080/");
        driver.Manage().Window.Size = new Size(1366, 762);
        Thread.Sleep(3000);
    }
    [Test]
    public void testeCadastroAluno()
    {
        paginaInicial();
        driver.FindElement(By.CssSelector(".v-btn:nth-child(2) > .v-btn__content")).Click();
        Thread.Sleep(3000);
        driver.FindElement(By.Id("userName-login")).Click();
        driver.FindElement(By.Id("userName-login")).SendKeys("aluno");
        Thread.Sleep(3000);
        driver.FindElement(By.Id("password")).Click();
        driver.FindElement(By.Id("password")).SendKeys("String1");
        driver.FindElement(By.CssSelector(".float-right > .v-btn__content")).Click();
        Thread.Sleep(15000);
    }
    
    
    [Test]
    public void testeCadastroProfessor() {
        paginaInicial();
        driver.FindElement(By.CssSelector(".v-btn:nth-child(2) > .v-btn__content")).Click();
        Thread.Sleep(3000);
        driver.FindElement(By.Id("userName-login")).Click();
        driver.FindElement(By.Id("userName-login")).SendKeys("professor");
        Thread.Sleep(3000);
        driver.FindElement(By.Id("password")).Click();
        driver.FindElement(By.Id("password")).SendKeys("String1");
        driver.FindElement(By.XPath("//*[@id='app']/div/main/div/div/div[2]/div/div/div[2]/div[3]/div/div/div[1]/div/div")).Click();
        Thread.Sleep(3000);
        driver.FindElement(By.CssSelector(".float-right > .v-btn__content")).Click();
        Thread.Sleep(15000);
    }
    
    [Test]
    public void testeLoginProfessor()
    {
        paginaInicial();
        driver.FindElement(By.XPath("//*[@id='userName-login']")).Click();
        driver.FindElement(By.XPath("//*[@id='userName-login']")).SendKeys("professor");
        Thread.Sleep(3000);
        driver.FindElement(By.XPath("//*[@id='password']")).Click();
        driver.FindElement(By.XPath("//*[@id='password']")).SendKeys("String1");
        Thread.Sleep(3000);
        driver.FindElement(By.XPath("//*[@id='app']/div/main/div/div/div[2]/div/div/div[3]/button[1]")).Click();
        Thread.Sleep(15000);
    }
    [Test]
    public void testeLoginAluno()
    {
        paginaInicial();
        driver.FindElement(By.XPath("//*[@id='userName-login']")).Click();
        driver.FindElement(By.XPath("//*[@id='userName-login']")).SendKeys("aluno");
        Thread.Sleep(3000);
        driver.FindElement(By.XPath("//*[@id='password']")).Click();
        driver.FindElement(By.XPath("//*[@id='password']")).SendKeys("String1");
        Thread.Sleep(3000);
        driver.FindElement(By.XPath("//*[@id='app']/div/main/div/div/div[2]/div/div/div[3]/button[1]")).Click();
        Thread.Sleep(5000);
    }

    [Test]
    public void testeCriacaoQuiz()
    {
        testeLoginProfessor();
        driver.Manage().Window.Size = new Size(1920, 1080);
        driver.FindElement(By.XPath("//*[@id='app']/div/div/nav/div[1]/div/div[2]")).Click();
        driver.FindElement(By.XPath("//*[@id='topico']")).Click();
        driver.FindElement(By.XPath("//*[@id='topico']")).SendKeys("Vetores");
        driver.FindElement(By.XPath("//*[@id='pergunta']")).Click();
        driver.FindElement(By.XPath("//*[@id='pergunta']")).SendKeys("Qual a primeira posição de um vetor?");
        driver.FindElement(By.XPath("//*[@id='letraA']")).Click();
        driver.FindElement(By.XPath("//*[@id='letraA']")).SendKeys("0");
        driver.FindElement(By.XPath("//*[@id='letraB']")).Click();
        driver.FindElement(By.XPath("//*[@id='letraB']")).SendKeys("1");
        driver.FindElement(By.XPath("//*[@id='letraC']")).Click();
        driver.FindElement(By.XPath("//*[@id='letraC']")).SendKeys("2");
        driver.FindElement(By.XPath("//*[@id='letraD']")).Click();
        driver.FindElement(By.XPath("//*[@id='letraD']")).SendKeys("3");
        driver.FindElement(By.XPath("//*[@id='app']/div/main/div/div/div[2]/div/div/div/div[2]/div[3]/div[1]/div/div[1]/div/div[1]/div/div")).Click();
        Thread.Sleep(7000);
        driver.FindElement(By.XPath("//*[@id='app']/div/main/div/div/div[2]/div/div/div/div[3]/button[1]")).Click();
        Thread.Sleep(15000);
    }
    
    [Test]
    public void testeRealizacaoQuiz()
    {
        testeLoginAluno();
        driver.Manage().Window.Size = new Size(1920, 1080);
        driver.FindElement(By.XPath("//*[@id='app']/div/div/nav/div[1]/div/div[3]")).Click();
        Thread.Sleep(3000);
        driver.FindElement(By.XPath("//*[@id='app']/div/main/div/div/div[2]/div/div[2]/div[1]/div/div[3]/button[2]")).Click();
        Thread.Sleep(3000);
        driver.FindElement(By.XPath("//*[@id='app']/div[3]/div/div/div[2]/div[2]/div[1]/div/div[2]/div/div[1]/div/div")).Click();
        Thread.Sleep(3000);
        driver.FindElement(By.XPath("//*[@id='app']/div[3]/div/div/div[3]/button")).Click();
        Thread.Sleep(15000);
    }
}
