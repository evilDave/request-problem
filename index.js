const fs = require('fs')

const request = require('request').defaults({
	timeout: 240000,
	gzip: true,
	forever: false,
	// followAllRedirects: true,
	pool: {
		maxSockets: Infinity
	}
})

const go = (imageUrl, fileName) => {
	request(imageUrl)
		.pipe(
			fs.createWriteStream(`./temp_${fileName}`)
		)
}

go('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11514-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11514-Sml')
go('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11515-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11515-Sml')
go('https://cdn.shopify.com/s/files/1/0510/7809/products/2018-04-26-MAAP-MAY11521-Sml.jpg?v=1528428153', '2018-04-26-MAAP-MAY11521-Sml')
