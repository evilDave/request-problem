const fs = require('fs')
const fetch = require('node-fetch')

const request = require('request').defaults({
	timeout: 240000,
	gzip: true,
	forever: false,
	// followAllRedirects: true,
	pool: {
		maxSockets: Infinity
	}
})

const requestPipe = (imageUrl, fileName) => {
	request(imageUrl)
		.pipe(
			fs.createWriteStream(`./temp_request_${fileName}`)
		)
}

const fetchPipe = (imageUrl, fileName) => {
	fetch(imageUrl)
        .then(res => {
            const dest = fs.createWriteStream(`./temp_fetch_${fileName}`)
            res.body.pipe(dest);
        })
}

requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11514-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11514-Sml')
requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11515-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11515-Sml')
requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11521-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11521-Sml')
requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womenannex2_detail1_512x512_7ad2feae-8ea7-476c-aa3d-73dd50167348.jpg?v=1528428153', 'womenannex2_detail1_512x512_7ad2feae-8ea7-476c-aa3d-73dd50167348')
requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/annexwomen_detail1_512x512_ad2df095-191a-48dc-97b4-1bac40b6a762.jpg?v=1528428154', 'annexwomen_detail1_512x512_ad2df095-191a-48dc-97b4-1bac40b6a762')
requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womensannex_halfwidth2.jpg?v=1528428153', 'womensannex_halfwidth2')
requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womensannex_fullwidth1.jpg?v=1528428153', 'womensannex_fullwidth1')
requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womensannex_halfwidth1.jpg?v=1528428153', 'womensannex_halfwidth1')
requestPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womensannex_fullwidth2.jpg?v=1528428153', 'womensannex_fullwidth2')

fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11514-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11514-Sml')
fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11515-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11515-Sml')
fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11521-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11521-Sml')
fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womenannex2_detail1_512x512_7ad2feae-8ea7-476c-aa3d-73dd50167348.jpg?v=1528428153', 'womenannex2_detail1_512x512_7ad2feae-8ea7-476c-aa3d-73dd50167348')
fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/annexwomen_detail1_512x512_ad2df095-191a-48dc-97b4-1bac40b6a762.jpg?v=1528428154', 'annexwomen_detail1_512x512_ad2df095-191a-48dc-97b4-1bac40b6a762')
fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womensannex_halfwidth2.jpg?v=1528428153', 'womensannex_halfwidth2')
fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womensannex_fullwidth1.jpg?v=1528428153', 'womensannex_fullwidth1')
fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womensannex_halfwidth1.jpg?v=1528428153', 'womensannex_halfwidth1')
fetchPipe('https://cdn.shopify.com/s/files/1/0510/7809/products/womensannex_fullwidth2.jpg?v=1528428153', 'womensannex_fullwidth2')
