const templateScript = `
    <div class="header__container">
        <img src="./icons/S7_new_logo.png" class="header__container-logo" alt="">
        <div class="header__container-hrefs-block">
            <a class="header__container-hrefs-block-statistic"><i class="fas fa-chart-bar"></i> Statistic</a>
            <a class="header__container-hrefs-block-statistic"><i class="fas fa-cog"></i> Settings</a>
        </div>
    </div>
`;

const template = Handlebars.compile(templateScript);

export default template;