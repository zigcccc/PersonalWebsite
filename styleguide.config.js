module.exports = {
	propsParser: require('react-docgen-typescript').withDefaultConfig([
		{
			shouldExtractValuesFromUnion: true,
			savePropValueAsString: true,
		},
	]).parse,
	components: 'src/components/**/*.tsx',
	ignore: ['src/components/**/Styles.tsx', 'src/components/**/index.tsx'],
};
