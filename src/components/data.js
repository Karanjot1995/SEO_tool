// export function fetchADetails() {
//     return function() {
//         let path = this.context.router.route.location.search;
//         	path=path.replace('?url=','');
//         	fetch("https://cors-anywhere.herokuapp.com/" +`${path}`)
//             .then((response) => response.text())
            
//             .then((html) => {			
//         		const doc = new DOMParser().parseFromString(html, "text/html");
//         		const title = doc.getElementsByTagName('title')[0];
//         		var metaDescription =doc.getElementsByTagName('meta')['twitter:description'].getAttribute("content");
//         		this.setState({
//         			title: title.innerText.length,
//         			metaDescription: metaDescription.length
//                 })
//             })
//     };
//   }