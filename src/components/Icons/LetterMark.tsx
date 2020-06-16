import React from 'react';

import { withTheme } from 'styled-components';

export const LetterMark = withTheme(({ theme, ...props }) => (
	<svg width={242} height={33} viewBox="0 0 242 33" fill="none" {...props}>
		<path
			d="M1.229 30.769V8.036h6.68v9.638h.13l7.023-9.638h7.01l-7.484 10.1 7.828 12.633h-7.769l-4.962-8.347-1.777 2.391v5.956h-6.68zM30.683 30.769h-6.68V8.036h10.102c6.064 0 9.19 2.853 9.19 7.72 0 2.675-1.29 5.256-3.67 6.393l4.322 8.62h-7.473l-3.588-7.625h-2.192v7.625h-.011zm0-12.042h2.76c1.87 0 3.02-1.148 3.02-2.865 0-1.681-1.209-2.9-3.009-2.9h-2.771v5.765zM59.805 26.246h-6.94l-1.184 4.523h-6.81l7.425-22.733h8.385l7.426 22.733h-7.118l-1.184-4.523zm-5.72-4.712h4.512l-2.19-8.253h-.131l-2.191 8.252zM74.893 24.067c.19 1.29 1.765 2.143 3.565 2.143 2.002 0 3.233-.805 3.233-1.906 0-1.054-.84-1.515-3.28-1.953l-3.009-.533c-4.18-.723-6.442-3.126-6.442-6.678 0-4.594 3.944-7.495 9.356-7.495 6.052 0 9.439 2.77 9.474 7.187h-6.099c-.047-1.42-1.445-2.25-3.245-2.25-1.753 0-2.854.723-2.854 1.86 0 1.089.924 1.657 3.091 2.036l3.115.533c4.417.77 6.478 2.865 6.478 6.547 0 4.653-3.896 7.613-9.948 7.613-6.1 0-9.735-2.557-9.759-7.092h6.324v-.012zm-2.96-22.792h4.346l2.084 3.02h.13l2.085-3.02h4.346L80.91 6.568h-4.962l-4.015-5.293zM113.158 19.402c0 7.258-4.429 11.757-11.452 11.757-7.047 0-11.452-4.487-11.452-11.757s4.429-11.769 11.452-11.769 11.452 4.511 11.452 11.77zm-16.106 0c0 3.92 1.847 6.43 4.654 6.43s4.654-2.51 4.654-6.43c0-3.943-1.859-6.44-4.654-6.44s-4.654 2.51-4.654 6.44zM120.762 30.769l-6.905-22.733h7.686l3.636 16.398h.13l3.636-16.398h7.379l-6.905 22.733h-8.657zM154.42 30.769h-16.048V8.036h16.048v5.304h-9.356v3.67h8.775v4.796h-8.775v3.658h9.356v5.305zM156.99 19.39c0-7.494 4.335-11.757 11.286-11.757 6.005 0 10.541 3.907 10.553 9.543h-6.396c-.154-2.58-1.847-4.298-4.157-4.298-2.747 0-4.476 2.428-4.476 6.489 0 4.108 1.717 6.535 4.488 6.535 2.298 0 3.968-1.68 4.181-4.321h6.395c-.035 5.671-4.465 9.567-10.588 9.567-6.975.011-11.286-4.263-11.286-11.758zM180.522 31.053v-1.03l14.816-20.957h-14.354V7.752h16.154v1.053L182.346 29.75h14.816v1.315h-16.64v-.012zm7.84-24.485l-4.713-5.092h1.693l3.494 3.801 3.506-3.8h1.693l-4.713 5.09h-.96z"
			fill={theme.fg}
		/>
		<path
			d="M180.806 30.106L195.835 8.84v-.06h-14.579v-.745h15.586v.675l-15.017 21.253v.059h15.041v.746h-16.06v-.663zm3.482-28.346h.912l3.612 3.92h.036l3.612-3.92h.912l-4.193 4.523h-.698l-4.193-4.522zM200.904 7.752h-1.362v23.3h1.362v-23.3z"
			fill={theme.fg}
		/>
		<path
			d="M199.827 30.769V8.036h.793v22.733h-.793zM213.363 31.36c-5.933 0-10.09-4.984-10.09-12.112 0-7.068 4.05-11.816 10.09-11.816 4.619 0 8.302 2.794 9.167 6.95l.071.343h-1.338l-.048-.213c-.852-3.504-3.932-5.766-7.84-5.766-5.223 0-8.728 4.227-8.728 10.514 0 6.465 3.505 10.81 8.728 10.81 4.998 0 7.994-3.043 7.994-8.146v-1.29h-8.373v-1.291h9.711v2.558c-.011 5.825-3.588 9.46-9.344 9.46z"
			fill={theme.fg}
		/>
		<path
			d="M213.363 31.076c-5.803 0-9.806-4.818-9.806-11.828 0-6.914 3.92-11.532 9.806-11.532 4.477 0 8.054 2.711 8.883 6.725h-.77c-.889-3.611-4.098-5.99-8.113-5.99-5.424 0-9.012 4.297-9.012 10.797 0 6.583 3.671 11.094 9.012 11.094 5.14 0 8.279-3.196 8.279-8.43v-1.574h-8.374v-.723h9.143v2.274c0 5.695-3.434 9.188-9.048 9.188zM240.508 31.053l-2.985-7.897h-10.185l-2.996 7.897h-1.481l8.966-23.301h1.196l8.965 23.3h-1.48zm-3.482-9.188l-4.595-12.053-4.595 12.053h9.19z"
			fill={theme.fg}
		/>
		<path
			d="M237.725 22.871h-10.576l-2.997 7.898h-.864l8.752-22.733h.805l8.74 22.733h-.876l-2.984-7.898zm-10.292-.722h10.007l-4.962-13.024h-.083l-4.962 13.024z"
			fill={theme.fg}
		/>
	</svg>
));
