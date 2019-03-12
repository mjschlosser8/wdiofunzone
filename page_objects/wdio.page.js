import Page from './page';

class wdioSite extends Page {

get searchBar() { return $('#search_input_react'); }
get guideLink() { return $('a*=API') }

}

export default new wdioSite();
