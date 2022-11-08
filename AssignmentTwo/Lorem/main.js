const text = [
  `I'm baby fingerstache praxis affogato, yes plz mlkshk ennui taxidermy lo-fi food truck bicycle rights polaroid ascot. Neutra pitchfork iceland taxidermy cred distillery. Biodiesel stumptown craft beer, chia wolf church-key lyft authentic. Letterpress pour-over normcore vaporware, four dollar toast affogato yes plz swag irony fit roof party bodega boys. VHS la croix post-ironic, YOLO slow-carb woke pinterest flexitarian church-key irony yr marfa before they sold out farm-to-table actually. Sus fixie beard austin DSA small batch pinterest tilde semiotics scenester artisan mustache ethical actually.`,
  `Tote bag pork belly cold-pressed, man bun kombucha offal truffaut locavore whatever DIY kale chips fixie shabby chic banjo. Helvetica taxidermy schlitz tonx, chartreuse trust fund aesthetic small batch kale chips cronut. Trust fund hot chicken bodega boys, cloud bread brunch food truck occupy keffiyeh gastropub small batch roof party la croix gochujang fanny pack. Pinterest chicharrones poke wolf, 3 wolf moon try-hard kickstarter normcore cliche Brooklyn shoreditch hoodie. Bodega boys meggings DSA mlkshk affogato trust fund waistcoat etsy sus twee whatever wayfarers. Bicycle rights copper mug narwhal tacos bitters. Blue bottle direct trade pabst pour-over tonx tousled, yr copper mug prism wolf kitsch praxis pork belly sus blog.`,
  `Neutra cardigan mustache tacos sus, vinyl flannel hot chicken ugh dreamcatcher. Fam you probably haven't heard of them biodiesel street art prism. Man bun 3 wolf moon tote bag, copper mug meh bitters beard ascot blue bottle man braid tilde helvetica. Fashion axe vape butcher everyday carry, crucifix coloring book helvetica succulents vaporware umami drinking vinegar roof party kale chips franzen ugh. Pabst vexillologist pork belly cloud bread.`,
  `Art party kickstarter leggings ethical hexagon lumbersexual bespoke. Raw denim direct trade before they sold out pour-over pinterest kogi food truck hella. Cold-pressed plaid wayfarers, gatekeep vape street art offal bespoke typewriter green juice taiyaki succulents skateboard biodiesel XOXO. Farm-to-table 3 wolf moon artisan humblebrag vegan pabst jianbing.`,
  `Tilde fam tumeric, asymmetrical mustache beard XOXO live-edge yuccie sustainable poutine chambray waistcoat pork belly. Tumeric hell of truffaut disrupt. Pok pok tumeric mukbang adaptogen umami portland cloud bread man bun bicycle rights keytar tattooed. Selvage VHS gatekeep tote bag. Same letterpress palo santo occupy gastropub.`,
  `I'm baby hashtag hammock scenester, gluten-free brunch knausgaard try-hard waistcoat. JOMO drinking vinegar jianbing sartorial cardigan lumbersexual messenger bag farm-to-table biodiesel. Pop-up hot chicken waistcoat lyft yuccie tacos. Distillery kinfolk Brooklyn deep v. La croix chillwave portland post-ironic meggings, freegan williamsburg cloud bread quinoa humblebrag flexitarian raclette air plant farm-to-table. Skateboard cardigan fashion axe kickstarter. Fanny pack sus selfies, lo-fi food truck tbh vexillologist heirloom crucifix kickstarter biodiesel.`,
  `Before they sold out affogato fashion axe try-hard. Sartorial street art church-key, intelligentsia occupy mustache gastropub keytar cold-pressed. Brooklyn selfies literally kombucha post-ironic. Letterpress fam succulents tonx. Thundercats taiyaki try-hard distillery. Keytar franzen bespoke snackwave, tote bag kitsch lumbersexual vegan narwhal fashion axe bushwick.`,
  `Chambray copper mug cred celiac +1 jean shorts trust fund next level polaroid readymade, letterpress blue bottle art party hoodie. Helvetica activated charcoal wolf, meh blue bottle farm-to-table asymmetrical semiotics. Tilde mumblecore la croix pork belly salvia raw denim chambray tonx activated charcoal. Typewriter tousled slow-carb chia. Humblebrag vaporware migas, squid disrupt same four loko ascot small batch raclette polaroid seitan master cleanse. Health goth praxis semiotics humblebrag, yuccie PBR&B cloud bread +1 kitsch. Pok pok shoreditch tumeric hashtag fanny pack, jianbing tonx bodega boys cornhole VHS unicorn.`,
  `Sartorial JOMO keytar af, wolf roof party la croix edison bulb. Food truck bitters salvia put a bird on it gochujang green juice before they sold out meditation. Sustainable kombucha fixie vinyl meh 90's woke narwhal fit jianbing austin bespoke. Salvia hoodie fashion axe, gentrify bicycle rights ugh PBR&B palo santo marfa cred. Pickled tousled bushwick offal, woke yes plz DIY polaroid marfa fashion axe +1.`,
  `Bodega boys schlitz you probably haven't heard of them knausgaard, shabby chic mukbang cronut yuccie fanny pack vegan flannel mustache mlkshk raw denim. JOMO cloud bread heirloom deep v gatekeep palo santo pour-over kitsch organic church-key stumptown. Jianbing same normcore cronut VHS shabby chic mukbang. Hoodie helvetica forage messenger bag cardigan, semiotics venmo pour-over tacos yuccie direct trade cliche. Organic synth seitan forage, small batch kale chips pork belly vice pop-up church-key pinterest kogi schlitz. Bushwick VHS tote bag pok pok adaptogen marfa.`,
];

const form = document.querySelector(".lorem-form");
const numofpara = document.getElementById("numofpara");
const numofparaRange = document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e) {
  const value = e.target.value;
  numofpara.value = value;
  numofparaRange.value = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseInt(numofpara.value);
  let tempText = text.slice(0, value);
  tempText = tempText.map((item) => `<p class="result">${item}</p>`).join("");
  result.innerHTML = tempText;
});

numofpara.addEventListener("input", syncParaNumbers);
numofparaRange.addEventListener("input", syncParaNumbers);
