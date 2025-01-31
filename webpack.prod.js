const common = require('./webpack.common.js');
const merge = require('webpack-merge').merge;
const webpack = require('webpack');

const banner = `
Threema Web.

Copyright © 2016-2022 Threema GmbH (https://threema.ch/).

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
`;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.BannerPlugin({banner: banner, entryOnly: true}),
  ],
});
