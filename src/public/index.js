
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Property1Variant8_Screenshot20220621at5171: tryRequire('./Property1Variant8_Screenshot20220621at5171.png') || require('./questionMark.png'),
	Property1ip_Screenshot_20220621_at_5041: tryRequire('./Property1ip_Screenshot_20220621_at_5041.png') || require('./questionMark.png'),
	Property1Nodejs_image4: tryRequire('./Property1Nodejs_image4.png') || require('./questionMark.png'),
	Property1Postgres_image6: tryRequire('./Property1Postgres_image6.png') || require('./questionMark.png'),
	Property1Prisma_image5: tryRequire('./Property1Prisma_image5.png') || require('./questionMark.png'),
	Property1gql_image3: tryRequire('./Property1gql_image3.png') || require('./questionMark.png'),
	Property1React_image2: tryRequire('./Property1React_image2.png') || require('./questionMark.png'),
	Property1pckd_Screenshot20220621at5072: tryRequire('./Property1pckd_Screenshot20220621at5072.png') || require('./questionMark.png'),
	HomeScreenshot_Line1: tryRequire('./HomeScreenshot_Line1.png') || require('./questionMark.png'),
	Frame1_Vector: tryRequire('./Frame1_Vector.png') || require('./questionMark.png'),
	Property1Variant9_Vector: tryRequire('./Property1Variant9_Vector.png') || require('./questionMark.png'),
	HomeScreenshot_Line2: tryRequire('./HomeScreenshot_Line2.png') || require('./questionMark.png'),
	Frame1_Vector_1: tryRequire('./Frame1_Vector_1.png') || require('./questionMark.png'),
	Property1Variant9_Vector_1: tryRequire('./Property1Variant9_Vector_1.png') || require('./questionMark.png'),
	HomeScreenshot_mobileinhand1: tryRequire('./HomeScreenshot_mobileinhand1.png') || require('./questionMark.png'),
	HomeScreenshot_Ellipse1: tryRequire('./HomeScreenshot_Ellipse1.png') || require('./questionMark.png'),
	HomeScreenshot_Vector: tryRequire('./HomeScreenshot_Vector.png') || require('./questionMark.png'),
	HomeScreenshot_Vector_1: tryRequire('./HomeScreenshot_Vector_1.png') || require('./questionMark.png'),
	HomeScreenshot_Vector_2: tryRequire('./HomeScreenshot_Vector_2.png') || require('./questionMark.png'),
	HomeScreenshot_Vector_3: tryRequire('./HomeScreenshot_Vector_3.png') || require('./questionMark.png'),
	HomeScreenshot_Vector_4: tryRequire('./HomeScreenshot_Vector_4.png') || require('./questionMark.png'),
	HomeScreenshot_Vector_5: tryRequire('./HomeScreenshot_Vector_5.png') || require('./questionMark.png'),
}