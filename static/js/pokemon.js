$(document).ready(function(){
    for (var i = 1; i<150;i++){
        $('.pokemon').append('<img id="'+i+'" src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+i+'.png">');
    };
    $(document).on('click','img',function(){
        $('.right').val("");
        var id=$(this).attr("id");
        $.get('https://pokeapi.co/api/v2/pokemon/'+id+'/', function(response){
            var pokedex= "";
            pokedex +='<p class="text text1">'+response.name+'</p>';
            pokedex += '<img src="'+ response.sprites.front_default+'">';
            pokedex += '<p class="text text2">Height:</p><p>' + response.height + '</p>';
            pokedex += '<p class="text text3">Weight:</p><p>' + response.weight + '</p>';
            pokedex += '<p class="text text4">Type:</p><ul>';
            for(var k=0; k< response.types.length;k++){
                pokedex += '<li>' + response.types[k].type.name +'</li>';
            };
            pokedex += '</ul>';
            $('.right').html(pokedex);

        }, 'json');
        
    });
});