/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Documentation: https://discordtickets.app
 * 	> Discord support server: https://go.eartharoid.me/discord
 *
 * ###############################################################################################
 */


module.exports = {
	defaults: {
		colour: '#AD5BFF',
		log_messages: false,
		name_format: 'ticket-{number}',
		opening_message: 'Bonjour {name}, merci d\'avoir créé un ticket. Un membre du staff communautaire va bientôt prendre contact avec vous.\n\n__Ne divulguez ici aucun mot de passe ou information personnelle.__'
	},
	developer: { debug: false },
	locale: 'fr-MC',
	logs: {
		enabled: false,
		keep_for: 30,
		split: true
	},
	max_listeners: 10,
	plugins: [],
	presence: {
		duration: 60,
		presences: [
			{
				activity: 'mc.erisium.com',
				type: 'PLAYING'
			}
		],
		randomise: false
	},
	super_secret_setting: true,
	update_notice: true
};
