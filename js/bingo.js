var cartelas = [];
var sorteados = [];

$( document ).ready(function() {
    console.log( "ready!" );
    $('.inputs').keydown(function (e) {
     if (e.which === 13) {
         console.log($('.inputs').index(this));
         if ($('.inputs').index(this) == 11) {
             var index = $('.inputs').index(this) + 2;
             $('.inputs').eq(index).focus();
         } else {
             var index = $('.inputs').index(this) + 1;
             $('.inputs').eq(index).focus();
         }
     } else {
         var index = $('.inputs').index(this);
         var size = $('.inputs').eq(index).val().length;
         if(size == 2) {
             if (index == 11) {
                 index += 2;
                 $('.inputs').eq(index).focus();
             } else {
                 $('.inputs').eq(++index).focus();
             }
         }
     }
 });
});

function reload() {
$('#cartelas').text('');
    cartelas.forEach(cartela => {
        $('#cartelas').append(criaCartela(cartela));
    });
}

function adicionar_numero() {
    var num = $('#novo_numero').val();
    if(sorteados.includes(num)) {
        alert(`Número já sorteado`);
        $('#novo_numero').val('');
        return;
    }

    sorteados.push(Number(num));
    console.log(sorteados);
    reload();
    $('#novo_numero').val('');
}

function exibe() {
$('#exibe_body').text('');
    sorteados.forEach(num => {
        $('#exibe_body').append(num);
        $('#exibe_body').append('<br>');
    });

    $('#exibe').modal('show');
}

function criaCartela(cartela) {
    vals = cartela[1];
    return `<div class="col-lg-3 col-md-4 col-xs-6">
        <div class="card">
            <div class="card-header">
                ${cartela[0]}
            </div>
            <table class="table table-bordered">
                <thead>
                    <th>B</th>
                    <th>I</th>
                    <th>N</th>
                    <th>G</th>
                    <th>O</th>
                </thead>

                <tbody>
                    <tr>
                        <td ${foiSorteado(vals[0])}>${vals[0]}</td>
                        <td ${foiSorteado(vals[5])}>${vals[5]}</td>
                        <td ${foiSorteado(vals[10])}>${vals[10]}</td>
                        <td ${foiSorteado(vals[15])}>${vals[15]}</td>
                        <td ${foiSorteado(vals[20])}>${vals[20]}</td>
                    </tr>
                    <tr>
                        <td ${foiSorteado(vals[1])}>${vals[1]}</td>
                        <td ${foiSorteado(vals[6])}>${vals[6]}</td>
                        <td ${foiSorteado(vals[11])}>${vals[11]}</td>
                        <td ${foiSorteado(vals[16])}>${vals[16]}</td>
                        <td ${foiSorteado(vals[21])}>${vals[21]}</td>
                    </tr>
                    <tr>
                        <td ${foiSorteado(vals[2])}>${vals[2]}</td>
                        <td ${foiSorteado(vals[7])}>${vals[7]}</td>
                        <td ${foiSorteado(vals[12])}>${vals[12]}</td>
                        <td ${foiSorteado(vals[17])}>${vals[17]}</td>
                        <td ${foiSorteado(vals[22])}>${vals[22]}</td>
                    </tr>
                    <tr>
                        <td ${foiSorteado(vals[3])}>${vals[3]}</td>
                        <td ${foiSorteado(vals[8])}>${vals[8]}</td>
                        <td ${foiSorteado(vals[13])}>${vals[13]}</td>
                        <td ${foiSorteado(vals[18])}>${vals[18]}</td>
                        <td ${foiSorteado(vals[23])}>${vals[23]}</td>
                    </tr>
                    <tr>
                        <td ${foiSorteado(vals[4])}>${vals[4]}</td>
                        <td ${foiSorteado(vals[9])}>${vals[9]}</td>
                        <td ${foiSorteado(vals[14])}>${vals[14]}</td>
                        <td ${foiSorteado(vals[19])}>${vals[19]}</td>
                        <td ${foiSorteado(vals[24])}>${vals[24]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`;
}

function foiSorteado(val) {
    console.log('sorteado?');
console.log(sorteados);
    console.log(val);

    console.log(sorteados.includes(val));
    return sorteados.includes(val) ? `class="table-success"` : ``;
}

function adiciona() {
    console.log('adiciona');

    var nome = ($('#mnome').val() == "") ? "Cartela " + (cartelas.length + 1) : $('#mnome').val();

    var b1 = Number($('#mb1').val());
    var b2 = Number($('#mb2').val());
    var b3 = Number($('#mb3').val());
    var b4 = Number($('#mb4').val());
    var b5 = Number($('#mb5').val());

    var i1 = Number($('#mi1').val());
    var i2 = Number($('#mi2').val());
    var i3 = Number($('#mi3').val());
    var i4 = Number($('#mi4').val());
    var i5 = Number($('#mi5').val());

    var n1 = Number($('#mn1').val());
    var n2 = Number($('#mn2').val());
    var n4 = Number($('#mn4').val());
    var n5 = Number($('#mn5').val());

    var g1 = Number($('#mg1').val());
    var g2 = Number($('#mg2').val());
    var g3 = Number($('#mg3').val());
    var g4 = Number($('#mg4').val());
    var g5 = Number($('#mg5').val());

    var o1 = Number($('#mo1').val());
    var o2 = Number($('#mo2').val());
    var o3 = Number($('#mo3').val());
    var o4 = Number($('#mo4').val());
    var o5 = Number($('#mo5').val());

    escondeModal();

    var cartela = [nome,
                    [b1,b2,b3,b4,b5,
                    i1,i2,i3,i4,i5,
                    n1,n2,"",n4,n5,
                    g1,g2,g3,g4,g5,
                    o1,o2,o3,o4,o5]];

    if(b1 == 0 || b2 == 0 || b3 == 0 || b4 == 0 || b5 == 0 ||
    i1 == 0 || i2 == 0 || i3 == 0 || i4 == 0 || i5 == 0 ||
    n1 == 0 || n2 == 0 || n4 == 0 || n5 == 0 ||
    g1 == 0 || g2 == 0 || g3 == 0 || g4 == 0 || g5 == 0 ||
    o1 == 0 || o2 == 0 || o3 == 0 || o4 == 0 || o5 == 0) {
        alert(`Cartela inválida`);
        return;
    }

    cartelas.push(cartela);

    reload();
}

function escondeModal() {
    $('#adiciona').modal('hide');

    $('#mnome').val('');

    $('#mb1').val('');
    $('#mb2').val('');
    $('#mb3').val('');
    $('#mb4').val('');
    $('#mb5').val('');

    $('#mi1').val('');
    $('#mi2').val('');
    $('#mi3').val('');
    $('#mi4').val('');
    $('#mi5').val('');

    $('#mn1').val('');
    $('#mn2').val('');
    $('#mn4').val('');
    $('#mn5').val('');

    $('#mg1').val('');
    $('#mg2').val('');
    $('#mg3').val('');
    $('#mg4').val('');
    $('#mg5').val('');

    $('#mo1').val('');
    $('#mo2').val('');
    $('#mo3').val('');
    $('#mo4').val('');
    $('#mo5').val('');
}
