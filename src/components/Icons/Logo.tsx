import * as React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
	<svg width={192} height={70} viewBox="0 0 192 70" fill="none" {...props}>
		<path
			d="M88.044 39.227V29.49h2.884v4.128h.056l3.033-4.128h3.027l-3.232 4.326 3.38 5.411h-3.354l-2.143-3.575-.767 1.024v2.551h-2.884zM100.761 39.227h-2.884V29.49h4.362c2.618 0 3.968 1.222 3.968 3.307 0 1.146-.557 2.251-1.585 2.738l1.866 3.692h-3.226l-1.55-3.266h-.946v3.266h-.005zm0-5.157h1.192c.808 0 1.304-.492 1.304-1.228 0-.72-.522-1.242-1.299-1.242h-1.197v2.47zM113.335 37.29h-2.996l-.512 1.937h-2.94l3.206-9.737h3.621l3.206 9.737h-3.073l-.512-1.937zm-2.47-2.018h1.949l-.946-3.535h-.057l-.946 3.535zM119.85 36.357c.082.552.762.918 1.539.918.864 0 1.396-.345 1.396-.817 0-.451-.363-.65-1.417-.837l-1.298-.228c-1.805-.31-2.782-1.339-2.782-2.86 0-1.968 1.703-3.21 4.039-3.21 2.613 0 4.076 1.186 4.091 3.078h-2.633c-.021-.609-.624-.964-1.401-.964-.757 0-1.233.31-1.233.797 0 .466.399.71 1.335.872l1.345.228c1.907.33 2.797 1.227 2.797 2.805 0 1.993-1.682 3.26-4.295 3.26-2.634 0-4.204-1.095-4.214-3.037h2.731v-.005zm-1.279-9.763h1.877l.9 1.293h.056l.9-1.293h1.877l-1.734 2.267h-2.142l-1.734-2.267zM136.371 34.358c0 3.109-1.912 5.036-4.945 5.036-3.042 0-4.944-1.922-4.944-5.036 0-3.113 1.912-5.04 4.944-5.04 3.033 0 4.945 1.932 4.945 5.04zm-6.954 0c0 1.679.798 2.754 2.009 2.754 1.212 0 2.01-1.075 2.01-2.754 0-1.688-.803-2.758-2.01-2.758-1.206 0-2.009 1.075-2.009 2.758zM139.654 39.227l-2.981-9.737h3.318l1.57 7.024h.057l1.569-7.024h3.186l-2.981 9.737h-3.738zM154.186 39.227h-6.928V29.49h6.928v2.272h-4.039v1.572h3.789v2.054h-3.789v1.567h4.039v2.272zM155.296 34.353c0-3.21 1.871-5.036 4.873-5.036 2.592 0 4.551 1.674 4.556 4.088h-2.761c-.067-1.106-.798-1.841-1.795-1.841-1.186 0-1.933 1.04-1.933 2.78 0 1.759.742 2.798 1.938 2.798.992 0 1.713-.72 1.805-1.85h2.761c-.015 2.429-1.927 4.097-4.571 4.097-3.012.005-4.873-1.826-4.873-5.036zM165.456 39.348v-.44l6.397-8.977h-6.197v-.563h6.974v.451l-6.386 8.972h6.397v.563h-7.185v-.006zm3.385-10.487l-2.035-2.18h.731l1.509 1.627 1.513-1.628h.732l-2.035 2.18h-.415z"
			fill="#14171A"
		/>
		<path
			d="M165.579 38.943l6.489-9.108v-.025h-6.295v-.32h6.73v.29l-6.484 9.102v.026h6.494v.32h-6.934v-.285zm1.503-12.14h.394l1.56 1.678h.015l1.56-1.679h.393l-1.81 1.938h-.302l-1.81-1.938zM174.256 29.368h-.588v9.98h.588v-9.98z"
			fill="#14171A"
		/>
		<path
			d="M173.791 39.227V29.49h.343v9.737h-.343zM179.636 39.48c-2.562 0-4.357-2.134-4.357-5.187 0-3.028 1.749-5.062 4.357-5.062 1.994 0 3.584 1.197 3.958 2.977l.03.147h-.578l-.02-.09c-.368-1.502-1.698-2.47-3.385-2.47-2.255 0-3.769 1.81-3.769 4.503 0 2.769 1.514 4.63 3.769 4.63 2.158 0 3.451-1.303 3.451-3.49v-.552h-3.615v-.553h4.193v1.096c-.005 2.495-1.549 4.052-4.034 4.052z"
			fill="#14171A"
		/>
		<path
			d="M179.636 39.359c-2.506 0-4.234-2.064-4.234-5.067 0-2.961 1.692-4.939 4.234-4.939 1.933 0 3.477 1.161 3.835 2.88h-.333c-.383-1.546-1.769-2.565-3.502-2.565-2.342 0-3.892 1.84-3.892 4.624 0 2.82 1.586 4.752 3.892 4.752 2.219 0 3.574-1.369 3.574-3.61v-.675h-3.615v-.31h3.947v.974c0 2.44-1.483 3.936-3.906 3.936zM191.356 39.349l-1.289-3.383h-4.397l-1.294 3.383h-.639l3.871-9.98h.516l3.871 9.98h-.639zm-1.504-3.936l-1.984-5.162-1.984 5.162h3.968z"
			fill="#14171A"
		/>
		<path
			d="M190.154 35.845h-4.566l-1.294 3.382h-.373l3.779-9.737h.347l3.774 9.737h-.378l-1.289-3.382zm-4.444-.31h4.321l-2.142-5.578h-.036l-2.143 5.578zM20.234 70c-2.178 0-4.316-.284-6.34-.837h-.006a20.04 20.04 0 01-6.386-3.017A17.492 17.492 0 012.214 60.1C.885 57.595.204 54.786.204 51.758c0-2.003.287-4.118.86-6.298.378-1.44.808-2.911 1.278-4.377.092-.279.18-.553.261-.822a11.284 11.284 0 01-2.587-6.648c-.225-4.306 1.979-8.312 5.752-10.452l.312-.178a24.815 24.815 0 012.22-1.125c.306-.26.613-.579.92-.944a22.085 22.085 0 001.672-2.317 301.803 301.803 0 012.49-3.865s.005-.01.01-.015a73.645 73.645 0 013.028-4.265 29.634 29.634 0 014.745-4.924 25.456 25.456 0 016.463-3.86C30.308.558 33.263 0 36.403 0c1.472 0 2.848.112 4.1.335l.031.005a25.675 25.675 0 012.961.71c3.334 1.024 5.967 3.458 7.225 6.684 1.258 3.23.962 6.79-.813 9.772l-.378.634a11.097 11.097 0 01-2.588 2.977c.415-.025.85-.035 1.294-.035 2.884 0 6.085.471 8.35 1.227.338.111.594.188.808.243l2.24.579c.69-.563 1.437-1.04 2.235-1.426a10.631 10.631 0 014.658-1.065c1.723 0 3.452.431 4.996 1.243a11.359 11.359 0 013.804 3.25 12.389 12.389 0 012.286 5.138l.015.076c.19.974.68 3.56-.654 6.608-.885 2.018-2.235 3.428-3.442 4.549-.035.035-.076.071-.117.112-.036.03-.067.06-.103.09l-.025.026-.03.03c-.047.046-.185.183-.272.274-1.247 1.263-3.845 3.89-8.284 5.188-.107.03-.21.061-.317.092a19.98 19.98 0 01-4.832.68c-.148.004-.291.004-.434.004-1.923 0-3.984-.248-6.131-.745a10.987 10.987 0 01-.435-.112 67.64 67.64 0 01-3.564-1.1s-.005 0-.005-.005c-.44-.152-.834-.294-1.187-.426a.398.398 0 00-.04.081c-.026.05-.052.096-.077.147 0 .005-.005.005-.005.01a281.25 281.25 0 01-2.797 5.036l-.225.386c-.062.1-.118.202-.169.294-.01.02-.097.162-.097.162l-.138.233a209.404 209.404 0 01-2.603 4.321c-1.565 2.515-3.216 4.696-4.899 6.471-2.147 2.267-4.545 4.032-7.133 5.249C26.784 69.326 23.63 70 20.234 70z"
			fill="#14171A"
		/>
		<path
			d="M20.234 65.547c-1.774 0-3.503-.228-5.139-.68-1.83-.506-3.497-1.292-4.96-2.337a13.044 13.044 0 01-3.947-4.514C5.2 56.16 4.7 54.056 4.7 51.753c0-1.623.24-3.367.716-5.178a75.025 75.025 0 011.211-4.138c.389-1.202.737-2.348 1.038-3.403.02-.06.036-.121.052-.182a6.863 6.863 0 01-3.212-5.472c-.138-2.622 1.207-5.057 3.498-6.36l.312-.177c.705-.4 1.36-.73 2-1.004.214-.092.413-.208.597-.35 0 0 .006 0 .006-.005a11.802 11.802 0 001.779-1.755 26.885 26.885 0 002-2.77c.777-1.226 1.6-2.504 2.454-3.808l.005-.005a69.705 69.705 0 012.843-4.006 25.424 25.424 0 014.035-4.19 20.865 20.865 0 015.317-3.174c2.138-.877 4.51-1.323 7.057-1.323 1.207 0 2.321.086 3.313.263.006 0 .01 0 .016.005a21.28 21.28 0 012.439.584 6.783 6.783 0 014.362 4.031 6.686 6.686 0 01-.491 5.898l-.379.634c-1.222 2.054-3.482 3.332-5.885 3.332a6.983 6.983 0 01-1.861-.253c-.006 0-.01-.005-.016-.005-.2-.056-.43-.087-.68-.087-.066 0-.112.005-.143.005-.348.218-.7.528-1.038.913a15.22 15.22 0 00-1.647 2.303c-.741 1.252-1.508 2.535-2.275 3.823a67.405 67.405 0 01-2.751 4.23 25.72 25.72 0 01-4.04 4.513c-.015.016-.035.03-.05.046.485 1.354.73 2.84.73 4.438 0 1.597-.225 3.235-.67 4.873a74.344 74.344 0 01-1.068 3.586c0 .005 0 .005-.005.01-.041.132-.087.263-.128.39.573-.75 1.16-1.602 1.754-2.556.542-.872 1.11-1.8 1.677-2.764.066-.137.143-.263.22-.39l.526-.877c.261-.447.548-.939.9-1.557l.609-1.065c.133-.28.281-.563.445-.842l.215-.36.076-.132.031-.046c.26-.43.496-.811.721-1.156l.112-.172c.594-.908 1.13-1.644 1.647-2.242.005-.005.01-.015.02-.025.016-.016.026-.036.041-.051l.317-.436c.895-1.263 2.567-3.606 5.646-5.35 1.764-1 4.28-2.171 8.1-2.404.332-.02.684-.03 1.058-.03 2.357 0 5.139.4 6.923.993.435.147.788.254 1.105.335l4.454 1.151c.189-.091.434-.223.715-.385.052-.061.103-.117.154-.173.005-.005.01-.01.01-.015 1.324-1.516 3.078-2.348 4.94-2.348 2.01 0 3.906.984 5.2 2.703a8.02 8.02 0 011.483 3.378c.128.659.424 2.206-.363 3.996-.527 1.197-1.335 2.094-2.393 3.073-.026.025-.056.056-.092.081l-.01.005a.893.893 0 00-.072.066l-.067.061-.056.05c-.102.092-.245.24-.399.396-1.135 1.151-3.037 3.069-6.366 4.042a15.318 15.318 0 01-3.948.578c-.117 0-.23.005-.347.005-1.58 0-3.298-.213-5.114-.628a61.624 61.624 0 01-3.544-1.08h-.004a54.582 54.582 0 01-2.762-1.045 3.346 3.346 0 00-.93-.152c-1.202 0-2.066 1.313-2.28 1.678-.042.076-.088.167-.113.208-.01.025-.026.046-.036.071-.205.375-.384.715-.557 1.03-.02.04-.041.076-.062.116a287.6 287.6 0 01-2.75 4.95c-.006.005-.052.091-.052.091-.026.046-.051.086-.072.127 0 .005-.092.157-.092.157-.056.096-.107.193-.158.274 0 0-.061.106-.082.137l-.015.03c-.036.056-.067.117-.102.173a204.284 204.284 0 01-2.572 4.27c-1.412 2.262-2.874 4.204-4.352 5.766-1.76 1.856-3.702 3.296-5.783 4.27-2.23 1.05-4.74 1.582-7.46 1.582z"
			fill="#14171A"
		/>
		<path
			d="M20.234 61.232c-1.386 0-2.72-.178-3.978-.523-1.33-.365-2.531-.928-3.57-1.678a8.708 8.708 0 01-2.648-3.028c-.655-1.232-.987-2.662-.987-4.25 0-1.257.194-2.637.573-4.097a73.917 73.917 0 011.145-3.91c.404-1.248.767-2.44 1.084-3.54.266-.928.4-1.71.4-2.328 0-.32-.052-.614-.154-.898a3.165 3.165 0 00-.43-.826l-.005-.005a1.62 1.62 0 00-.798-.573l-.138-.046a5.52 5.52 0 01-.28-.106l-.057-.026a2.577 2.577 0 01-1.544-2.231 2.581 2.581 0 011.319-2.394l.312-.177c.562-.32 1.074-.578 1.56-.786a6.978 6.978 0 001.57-.928 15.625 15.625 0 002.448-2.41 30.714 30.714 0 002.317-3.21c.767-1.207 1.58-2.474 2.418-3.752a65.222 65.222 0 012.665-3.753 21.091 21.091 0 013.344-3.48 16.507 16.507 0 014.213-2.514c1.606-.66 3.416-.994 5.39-.994.95 0 1.81.065 2.546.197.69.127 1.34.28 1.933.462a2.46 2.46 0 011.59 1.47c.276.71.21 1.492-.179 2.15l-.378.635a2.498 2.498 0 01-2.142 1.212c-.23 0-.46-.03-.68-.091a6.896 6.896 0 00-1.877-.254c-.89 0-1.636.182-2.265.553-.783.461-1.52 1.08-2.194 1.846a19.723 19.723 0 00-2.117 2.946c-.742 1.243-1.503 2.526-2.27 3.814a64.844 64.844 0 01-2.573 3.96 21.134 21.134 0 01-3.359 3.753 16.001 16.001 0 01-2.95 2.054 7.521 7.521 0 011.37 1.927c.527 1.06.793 2.313.793 3.728 0 1.217-.174 2.48-.522 3.753a67.791 67.791 0 01-1.007 3.382 51.877 51.877 0 00-.931 3.175 10.571 10.571 0 00-.358 2.642c0 .624.072 1.131.22 1.506.123.33.276.573.455.746l.005.005c.18.172.379.294.624.375.343.112.736.172 1.181.172.915 0 1.744-.218 2.526-.674.92-.532 1.836-1.324 2.726-2.348.987-1.136 1.999-2.53 3.011-4.159.588-.943 1.202-1.952 1.82-2.992.026-.06.062-.131.108-.208l.547-.912c.271-.462.568-.98.936-1.618l.7-1.227c.093-.208.205-.421.328-.634.061-.107.128-.218.194-.325l.082-.132a38.445 38.445 0 01.685-1.095l.062-.092c.5-.765.95-1.389 1.35-1.845.046-.056.097-.122.153-.188.01-.01.02-.026.03-.04.129-.168.272-.37.425-.584.798-1.126 2.005-2.825 4.244-4.087 1.432-.822 3.293-1.679 6.208-1.857.24-.015.506-.02.787-.02 1.872 0 4.198.325 5.538.771.532.178.977.31 1.391.416l4.49 1.161c.424.112.848.168 1.258.168.122 0 .245-.005.362-.016.696-.06 1.995-.75 2.89-1.323a.517.517 0 00.097-.081c.225-.234.43-.457.618-.675.62-.71 1.238-.857 1.652-.857.634 0 1.248.345 1.718.974.328.436.578.989.67 1.475.01.041.015.082.026.122.087.441.174.903-.077 1.47-.2.452-.583.914-1.376 1.65-.015.014-.035.03-.05.05-.016.015-.031.025-.047.04l-.015.016a.322.322 0 01-.046.04c-.015.015-.036.03-.056.05l-.087.082c-.164.152-.338.33-.522.512-.95.964-2.25 2.277-4.52 2.931a11.043 11.043 0 01-2.771.396h-.261c-1.248 0-2.639-.172-4.132-.517-.015-.005-.026-.005-.04-.01a52.811 52.811 0 01-3.069-.944c-.93-.32-1.62-.593-2.173-.811l-.578-.228a7.72 7.72 0 00-2.367-.396c-3.564 0-5.554 2.977-6.085 3.905l-.159.29-.015.03c-.215.4-.41.755-.593 1.095-.01.015-.016.035-.026.05a270.764 270.764 0 01-2.7 4.864l-.036.056c-.03.056-.061.106-.092.157l-.087.147a9.023 9.023 0 01-.143.249l-.03.056c-.016.025-.031.055-.046.08l-.031.051c-.015.026-.03.056-.051.082a185.89 185.89 0 01-2.557 4.244c-1.258 2.019-2.541 3.728-3.82 5.082-1.386 1.46-2.889 2.581-4.469 3.327-1.636.76-3.518 1.15-5.589 1.15z"
			fill="url(#prefix__paint0_linear)"
		/>
		<defs>
			<linearGradient
				id="prefix__paint0_linear"
				x1={8.842}
				y1={35.001}
				x2={69.034}
				y2={35.001}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#ECB22F" />
				<stop offset={1} stopColor="#CE982C" />
			</linearGradient>
		</defs>
	</svg>
);

export const LogoLight = (props: React.SVGProps<SVGSVGElement>) => (
	<svg width={192} height={70} viewBox="0 0 192 70" fill="none" {...props}>
		<path
			d="M88.044 39.227V29.49h2.884v4.128h.056l3.033-4.128h3.027l-3.232 4.326 3.38 5.411h-3.354l-2.143-3.575-.767 1.024v2.551h-2.884zM100.761 39.227h-2.884V29.49h4.362c2.618 0 3.968 1.222 3.968 3.307 0 1.146-.557 2.251-1.585 2.738l1.866 3.692h-3.226l-1.55-3.266h-.946v3.266h-.005zm0-5.157h1.192c.808 0 1.304-.492 1.304-1.228 0-.72-.522-1.242-1.299-1.242h-1.197v2.47zM113.335 37.29h-2.996l-.512 1.937h-2.94l3.206-9.737h3.621l3.206 9.737h-3.073l-.512-1.937zm-2.47-2.018h1.949l-.946-3.535h-.057l-.946 3.535zM119.85 36.357c.082.552.762.918 1.539.918.864 0 1.396-.345 1.396-.817 0-.451-.363-.65-1.417-.837l-1.298-.228c-1.805-.31-2.782-1.339-2.782-2.86 0-1.968 1.703-3.21 4.039-3.21 2.613 0 4.076 1.186 4.091 3.078h-2.633c-.021-.609-.624-.964-1.401-.964-.757 0-1.233.31-1.233.797 0 .466.399.71 1.335.872l1.345.228c1.907.33 2.797 1.227 2.797 2.805 0 1.993-1.682 3.26-4.295 3.26-2.634 0-4.204-1.095-4.214-3.037h2.731v-.005zm-1.279-9.763h1.877l.9 1.293h.056l.9-1.293h1.877l-1.734 2.267h-2.142l-1.734-2.267zM136.371 34.358c0 3.109-1.912 5.036-4.945 5.036-3.042 0-4.944-1.922-4.944-5.036 0-3.113 1.912-5.04 4.944-5.04 3.033 0 4.945 1.932 4.945 5.04zm-6.954 0c0 1.679.798 2.754 2.009 2.754 1.212 0 2.01-1.075 2.01-2.754 0-1.688-.803-2.758-2.01-2.758-1.206 0-2.009 1.075-2.009 2.758zM139.654 39.227l-2.981-9.737h3.318l1.57 7.024h.057l1.569-7.024h3.186l-2.981 9.737h-3.738zM154.186 39.227h-6.928V29.49h6.928v2.272h-4.039v1.572h3.789v2.054h-3.789v1.567h4.039v2.272zM155.296 34.353c0-3.21 1.871-5.036 4.873-5.036 2.592 0 4.551 1.674 4.556 4.088h-2.761c-.067-1.106-.798-1.841-1.795-1.841-1.186 0-1.933 1.04-1.933 2.78 0 1.759.742 2.798 1.938 2.798.992 0 1.713-.72 1.805-1.85h2.761c-.015 2.429-1.927 4.097-4.571 4.097-3.012.005-4.873-1.826-4.873-5.036zM165.456 39.348v-.44l6.397-8.977h-6.197v-.563h6.974v.451l-6.386 8.972h6.397v.563h-7.185v-.006zm3.385-10.487l-2.035-2.18h.731l1.509 1.627 1.513-1.628h.732l-2.035 2.18h-.415z"
			fill="#fff"
		/>
		<path
			d="M165.579 38.943l6.489-9.108v-.025h-6.295v-.32h6.73v.29l-6.484 9.102v.026h6.494v.32h-6.934v-.285zm1.503-12.14h.394l1.56 1.678h.015l1.56-1.679h.393l-1.81 1.938h-.302l-1.81-1.938zM174.257 29.368h-.589v9.98h.589v-9.98z"
			fill="#fff"
		/>
		<path
			d="M173.791 39.227V29.49h.343v9.737h-.343zM179.636 39.48c-2.562 0-4.357-2.134-4.357-5.187 0-3.028 1.749-5.062 4.357-5.062 1.994 0 3.584 1.197 3.958 2.977l.03.147h-.578l-.02-.09c-.368-1.502-1.698-2.47-3.385-2.47-2.255 0-3.769 1.81-3.769 4.503 0 2.769 1.514 4.63 3.769 4.63 2.158 0 3.451-1.303 3.451-3.49v-.552h-3.615v-.553h4.193v1.096c-.005 2.495-1.549 4.052-4.034 4.052z"
			fill="#fff"
		/>
		<path
			d="M179.636 39.359c-2.506 0-4.234-2.064-4.234-5.067 0-2.961 1.692-4.939 4.234-4.939 1.933 0 3.477 1.161 3.835 2.88h-.333c-.383-1.546-1.769-2.565-3.502-2.565-2.342 0-3.892 1.84-3.892 4.624 0 2.82 1.586 4.752 3.892 4.752 2.219 0 3.574-1.369 3.574-3.61v-.675h-3.615v-.31h3.947v.974c0 2.44-1.482 3.936-3.906 3.936zM191.356 39.349l-1.289-3.383h-4.397l-1.294 3.383h-.639l3.871-9.98h.516l3.871 9.98h-.639zm-1.504-3.936l-1.984-5.162-1.984 5.162h3.968z"
			fill="#fff"
		/>
		<path
			d="M190.154 35.845h-4.566l-1.294 3.382h-.373l3.779-9.737h.347l3.774 9.737h-.378l-1.289-3.382zm-4.444-.31h4.321l-2.142-5.578h-.036l-2.143 5.578zM20.234 70c-2.178 0-4.316-.284-6.34-.837h-.006a20.04 20.04 0 01-6.386-3.017A17.492 17.492 0 012.214 60.1C.885 57.595.204 54.786.204 51.758c0-2.003.287-4.118.86-6.298.378-1.44.808-2.911 1.278-4.377.092-.279.18-.553.261-.822a11.284 11.284 0 01-2.587-6.648c-.225-4.306 1.979-8.312 5.752-10.452l.312-.178a24.815 24.815 0 012.22-1.125c.306-.26.613-.579.92-.944a22.07 22.07 0 001.672-2.317 302.927 302.927 0 012.49-3.865s.005-.01.01-.015a73.645 73.645 0 013.028-4.265 29.634 29.634 0 014.745-4.924 25.456 25.456 0 016.463-3.86C30.308.558 33.263 0 36.403 0c1.472 0 2.848.112 4.1.335l.031.005a25.675 25.675 0 012.961.71c3.334 1.024 5.967 3.458 7.225 6.684 1.258 3.23.962 6.79-.813 9.772l-.378.634a11.097 11.097 0 01-2.588 2.977c.415-.025.85-.035 1.294-.035 2.884 0 6.085.471 8.35 1.227.338.111.594.188.808.243l2.24.579c.69-.563 1.437-1.04 2.235-1.426a10.631 10.631 0 014.658-1.065c1.723 0 3.452.431 4.996 1.243a11.359 11.359 0 013.804 3.25 12.389 12.389 0 012.286 5.138l.015.076c.19.974.68 3.56-.654 6.608-.885 2.018-2.235 3.428-3.442 4.549-.035.035-.076.071-.117.112-.036.03-.067.06-.103.09l-.025.026-.03.03a16.21 16.21 0 00-.272.274c-1.247 1.263-3.845 3.89-8.284 5.188-.107.03-.21.061-.317.092-1.523.416-3.15.644-4.832.68-.148.004-.291.004-.434.004-1.923 0-3.984-.248-6.131-.745a10.987 10.987 0 01-.435-.112 67.64 67.64 0 01-3.564-1.1s-.005 0-.005-.005c-.44-.152-.834-.294-1.187-.426a.398.398 0 00-.04.081c-.026.05-.052.096-.077.147 0 .005-.005.005-.005.01a281.25 281.25 0 01-2.797 5.036l-.225.386c-.062.1-.118.202-.169.294-.01.02-.097.162-.097.162l-.138.233a209.404 209.404 0 01-2.603 4.321c-1.565 2.515-3.216 4.696-4.899 6.471-2.147 2.267-4.545 4.032-7.133 5.249C26.784 69.326 23.63 70 20.234 70z"
			fill="#fff"
		/>
		<path
			d="M20.234 65.547c-1.774 0-3.503-.228-5.139-.68-1.83-.506-3.497-1.292-4.96-2.337a13.044 13.044 0 01-3.947-4.514C5.2 56.16 4.7 54.056 4.7 51.753c0-1.623.24-3.367.715-5.178a75.025 75.025 0 011.212-4.138c.389-1.202.737-2.348 1.038-3.403.02-.06.036-.121.052-.182a6.863 6.863 0 01-3.212-5.472c-.138-2.622 1.207-5.057 3.498-6.36l.312-.177c.705-.4 1.36-.73 2-1.004.214-.092.413-.208.597-.35 0 0 .005 0 .005-.005a11.802 11.802 0 001.78-1.755 26.87 26.87 0 002-2.77 294.29 294.29 0 012.454-3.808l.005-.005a69.753 69.753 0 012.843-4.006 25.433 25.433 0 014.034-4.19 20.864 20.864 0 015.318-3.174c2.138-.877 4.51-1.323 7.057-1.323 1.207 0 2.321.086 3.313.263.006 0 .01 0 .016.005a21.276 21.276 0 012.439.584 6.783 6.783 0 014.362 4.031 6.686 6.686 0 01-.491 5.898l-.379.634c-1.222 2.054-3.482 3.332-5.885 3.332a6.982 6.982 0 01-1.861-.253c-.006 0-.01-.005-.016-.005a2.54 2.54 0 00-.68-.087c-.066 0-.112.005-.143.005a4.82 4.82 0 00-1.038.913 15.228 15.228 0 00-1.647 2.303c-.741 1.252-1.508 2.535-2.275 3.823a67.362 67.362 0 01-2.751 4.23 25.716 25.716 0 01-4.04 4.513c-.015.016-.036.03-.05.046.485 1.354.73 2.84.73 4.438 0 1.597-.225 3.235-.67 4.873a74.458 74.458 0 01-1.068 3.586c0 .005 0 .005-.005.01-.041.132-.087.263-.128.39.573-.75 1.16-1.602 1.754-2.556.542-.872 1.11-1.8 1.677-2.764.066-.137.143-.263.22-.39l.526-.877c.261-.447.548-.939.9-1.557l.609-1.065c.133-.28.281-.563.445-.842l.215-.36.076-.132.03-.046c.262-.43.497-.811.722-1.156l.112-.172c.594-.908 1.13-1.644 1.647-2.242.005-.005.01-.015.02-.025.016-.016.026-.036.041-.051l.317-.436c.895-1.263 2.567-3.606 5.645-5.35 1.765-1 4.28-2.171 8.1-2.404.333-.02.685-.03 1.059-.03 2.357 0 5.139.4 6.923.993.435.147.788.254 1.105.335l4.453 1.151c.19-.091.435-.223.716-.385.051-.061.103-.117.154-.173.005-.005.01-.01.01-.015 1.324-1.516 3.078-2.348 4.94-2.348 2.01 0 3.906.984 5.2 2.703a8.02 8.02 0 011.483 3.378c.128.659.424 2.206-.363 3.996-.527 1.197-1.335 2.094-2.393 3.073a.745.745 0 01-.092.081l-.01.005c-.026.02-.052.046-.072.066l-.067.061-.056.05c-.102.092-.245.24-.399.396-1.135 1.151-3.037 3.069-6.366 4.042a15.317 15.317 0 01-3.948.578c-.117 0-.23.005-.347.005-1.58 0-3.298-.213-5.114-.628a61.596 61.596 0 01-3.544-1.08h-.004a54.582 54.582 0 01-2.762-1.045 3.346 3.346 0 00-.93-.152c-1.202 0-2.066 1.313-2.28 1.678-.042.076-.088.167-.113.208-.01.025-.026.046-.036.071-.205.375-.384.715-.558 1.03l-.06.116c-1.13 2.08-2.164 3.92-2.752 4.95-.005.005-.051.091-.051.091-.026.046-.051.086-.072.127 0 .005-.092.157-.092.157-.056.096-.107.193-.158.274 0 0-.062.106-.082.137l-.015.03c-.036.056-.067.117-.102.173a203.829 203.829 0 01-2.573 4.27c-1.41 2.262-2.873 4.204-4.351 5.766-1.76 1.856-3.702 3.296-5.783 4.27-2.23 1.05-4.74 1.582-7.46 1.582z"
			fill="#fff"
		/>
		<path
			d="M20.234 61.232c-1.386 0-2.72-.178-3.978-.523-1.33-.365-2.531-.928-3.57-1.678a8.708 8.708 0 01-2.648-3.028c-.655-1.232-.987-2.662-.987-4.25 0-1.257.194-2.637.573-4.097a73.927 73.927 0 011.145-3.91c.404-1.248.767-2.44 1.084-3.54.266-.928.4-1.71.4-2.328 0-.32-.052-.614-.154-.898a3.165 3.165 0 00-.43-.826l-.005-.005a1.62 1.62 0 00-.798-.573l-.138-.046a5.52 5.52 0 01-.28-.106l-.057-.026a2.577 2.577 0 01-1.544-2.231 2.58 2.58 0 011.319-2.394l.312-.177c.562-.32 1.074-.578 1.56-.786a6.975 6.975 0 001.57-.928 15.622 15.622 0 002.448-2.41 30.713 30.713 0 002.317-3.21c.767-1.207 1.58-2.474 2.418-3.752a65.222 65.222 0 012.665-3.753 21.091 21.091 0 013.344-3.48 16.507 16.507 0 014.213-2.514c1.606-.66 3.416-.994 5.39-.994.95 0 1.81.065 2.546.197.69.127 1.34.28 1.933.462a2.46 2.46 0 011.59 1.47c.276.71.21 1.492-.179 2.15l-.378.635a2.498 2.498 0 01-2.142 1.212c-.23 0-.46-.03-.68-.091a6.897 6.897 0 00-1.877-.254c-.89 0-1.636.182-2.266.553-.782.461-1.518 1.08-2.193 1.846a19.723 19.723 0 00-2.117 2.946c-.742 1.243-1.503 2.526-2.27 3.814a64.844 64.844 0 01-2.573 3.96 21.138 21.138 0 01-3.359 3.753 16.001 16.001 0 01-2.95 2.054 7.523 7.523 0 011.37 1.927c.527 1.06.793 2.313.793 3.728 0 1.217-.174 2.48-.522 3.753a67.796 67.796 0 01-1.007 3.382 51.877 51.877 0 00-.931 3.175 10.571 10.571 0 00-.358 2.642c0 .624.072 1.131.22 1.506.123.33.276.573.455.746l.005.005c.18.172.378.294.624.375.343.112.736.172 1.181.172.915 0 1.744-.218 2.526-.674.92-.532 1.836-1.324 2.726-2.348.986-1.136 1.999-2.53 3.011-4.159.588-.943 1.202-1.952 1.82-2.992.026-.06.062-.131.108-.208l.547-.912c.271-.462.568-.98.936-1.618l.7-1.227c.093-.208.205-.421.328-.634.061-.107.128-.218.194-.325l.082-.132a38.445 38.445 0 01.685-1.095l.062-.092c.5-.765.95-1.389 1.35-1.845.045-.056.097-.122.153-.188.01-.01.02-.026.03-.04.128-.168.272-.37.425-.584.798-1.126 2.005-2.825 4.244-4.087 1.432-.822 3.293-1.679 6.208-1.857.24-.015.506-.02.787-.02 1.872 0 4.198.325 5.538.771.532.178.977.31 1.391.416l4.49 1.161c.424.112.848.168 1.258.168.122 0 .245-.005.362-.016.696-.06 1.995-.75 2.89-1.323a.513.513 0 00.097-.081c.225-.234.43-.457.618-.675.62-.71 1.238-.857 1.652-.857.634 0 1.248.345 1.718.974.328.436.578.989.67 1.475.01.041.015.082.026.122.087.441.174.903-.077 1.47-.2.452-.583.914-1.376 1.65-.015.014-.035.03-.05.05-.016.015-.031.025-.047.04l-.015.016c-.015.015-.03.03-.046.04-.015.015-.036.03-.056.05l-.087.082c-.164.152-.338.33-.522.512-.95.964-2.25 2.277-4.52 2.931a11.044 11.044 0 01-2.772.396h-.26c-1.248 0-2.639-.172-4.132-.517-.015-.005-.026-.005-.04-.01a52.811 52.811 0 01-3.069-.944c-.93-.32-1.62-.593-2.173-.811l-.578-.228a7.718 7.718 0 00-2.367-.396c-3.564 0-5.554 2.977-6.085 3.905-.052.091-.159.29-.159.29l-.015.03c-.215.4-.41.755-.593 1.095-.01.015-.016.035-.026.05a270.764 270.764 0 01-2.7 4.864l-.036.056c-.03.056-.061.106-.092.157l-.087.147a8.783 8.783 0 01-.143.249l-.03.056c-.016.025-.031.055-.046.08l-.031.051c-.016.026-.03.056-.051.082a185.528 185.528 0 01-2.557 4.244c-1.258 2.019-2.541 3.728-3.82 5.082-1.386 1.46-2.889 2.581-4.469 3.327-1.636.76-3.518 1.15-5.589 1.15z"
			fill="#292F37"
		/>
	</svg>
);
