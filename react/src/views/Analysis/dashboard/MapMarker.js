export const mapMakrer = (text, i) => {
  return [
    '<div class="cs_mapbridge" key='+i+'>',
    '<div class="map_group _map_group crs">',
    '<div class="map_marker _marker num0"> ',
    '<span class="ico _icon">'+text+'</span>',
    '<span class="shd"></span>',
    '</div>',
    '</div>',
    '</div>'
  ]
};