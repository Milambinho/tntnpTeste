//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

//Funções para criação dos elementos HTML dinamicamente.

    // Função para criar o campo de texto "Voalle Dump" ou "Voalle"
    function createVoalleDumpField() {
        return `<label for="Voalle">Voalle:</label>
                <input type="text" id="Voalle" name="Voalle" placeholder="Cole todo o texto da tela Dados Cadastrais do cliente" onchange="reconVoalle()"/>`;
    }
    //Função para criar o campo de texto "Matrix Dump" ou "Matrix"
    function createMatrixDumpField() {
        return `<label for="Matrix">Matrix:</label>
                <input type="text" id="Matrix" name="Matrix" placeholder="Cole toda a conversa com o cliente no matrix" onchange="reconMatrix()" />`;
    }
    // Função para criar o campo de texto para "solicitante"
    function createSolicitanteField() {
        return `<label for="solicitante">Solicitante:</label>
                <input type="text" id="solicitante" name="solicitante" placeholder="Se Voalle e Matrix foram preenchidos ignorar" onchange="mudaTitle()" />`;
    }

    // Função para criar o campo de texto para "contato"
    function createContatoField() {
        return `<label for="contato">Contato:</label>
                <input type="text" id="contato" name="contato"  placeholder="Se Voalle e Matrix foram preenchidos ignorar"/>`;
    }

    // Função para criar o campo de texto para "relato"
    function createRelatoField() {
        return `<label for="relato">Relato:</label>
                <input type="text" id="relato" name="relato"  placeholder="Ex: A TV não carrega "/>`;
    }

    // Função para criar o campo de texto para "procedimento interno realizado"
    function createProcedimentoField() {
        return `<label for="procedimento">Procedimento Interno Realizado:</label>
                <input type="text" id="procedimento" name="procedimento" placeholder="Ex: Troca de VLAN"/>`;
    }

    // Função para criar o campo de texto para "possível solução"
    function createPossivelSolucaoField() {
        return `<label for="solucao">Possível Solução(Ignorar em resolvido suporte):</label>
                <input type="text" id="solucao" name="solucao" placeholder= "Ex: Troca de cabo da WAN"/>`;
    }

    // Função para criar o campo de texto para "Sinal"
    function createSinalField() {
        return `<label for="sinal">Sinal:</label>
                <input type="text" id="sinal" name="sinal" placeholder= "Ex: 24"/>`;
    }

    // Função para criar o checkbox com 3 opções
    function createCheckboxOptions() {
        return `<fieldset>
                    <legend>Alarmes(Ignorar em resolvido suporte):</legend>
                    <label><input type="checkbox" name="opcao" value="LOS"> LOS</label>
                    <label><input type="checkbox" name="opcao" value="DYING GASP"> DYING GASP</label>
                    <label><input type="checkbox" name="opcao" value="LOAM"> LOAM</label>
                </fieldset>`;
    }

    // Função para criar o checkbox "TEM ACESSO REMOTO?"
    function createAcessoRemotoCheckbox() {
        return `<label><input type="checkbox" id="acesso_remoto" name="acesso_remoto">TEM ACESSO REMOTO?(Ignorar em resolvido suporte)</label>`;
    }

    // Função para criar o campo de texto para "atendimento via:"
    function createAtendimentoField() {
        return `<label for="atendimento">Atendimento Via:</label>
                <input type="text" id="atendimento" name="atendimento"  placeholder="Se Voalle e Matrix foram preenchidos ignorar"/>`;
    }

    // Função para criar o campo de texto para "cidade"
    function createCidadeField() {
        return `<label for="cidade">Cidade(Ignorar em resolvido suporte):</label>
                <input type="text" id="cidade" name="cidade" placeholder="Se Voalle e Matrix foram preenchidos ignorar"/>`;
    }

    // Função para criar o campo de texto para "melhor período para visita"
    function createMelhorPeriodoField() {
        return `<label for="periodo">Melhor Período para Visita(Ignorar em resolvido suporte):</label>
                <input type="text" id="periodo" name="periodo" placeholder="Ex: Amanhã às 9h38"/>`;
    }
    // Função para criar campo de texto para "endereço"
    function createEndereçoField() {
        return `<label for="endereco">Endereço(Ignorar em resolvido suporte):</label>
                <input type="text" id="endereco" name="endereco" placeholder="Se Voalle e Matrix foram preenchidos ignorar"/>`;
    }
    // Função para criar os checkboxes e listas de seleção para DNS 1 e DNS 2
    function createDNSFields() {
        const dnsOptions = `
            <option value="Cloud 1.1.1.1">Cloud 1.1.1.1</option>
            <option value="Cloud 1.0.0.1">Cloud 1.0.0.1</option>
            <option value="Google 8.8.8.8">Google 8.8.8.8</option>
            <option value="Google 8.8.4.4">Google 8.8.4.4</option>
            <option value="TnT 201.131.68.2">TnT 201.131.68.2</option>
            <option value="TnT 201.131.68.3">TnT 201.131.68.3</option>
        `;

        return `
            <fieldset>
                <legend>DNS Settings</legend>
                <label for="dns1_checkbox"><input type="checkbox" id="dns1_checkbox" name="dns1_checkbox"> DNS 1:</label>
                <select id="dns1" name="dns1" disabled>
                    ${dnsOptions}
                </select>
                <br>
                <label for="dns2_checkbox"><input type="checkbox" id="dns2_checkbox" name="dns2_checkbox"> DNS 2:</label>
                <select id="dns2" name="dns2" disabled>
                    ${dnsOptions}
                </select>
            </fieldset>
        `;
    }

    // Adicionar event listeners para habilitar/ desabilitar os selects com base nos checkboxes
    function addDNSEventListeners() {
        document.getElementById('dns1_checkbox').addEventListener('change', function() {
            document.getElementById('dns1').disabled = !this.checked;
        });

        document.getElementById('dns2_checkbox').addEventListener('change', function() {
            document.getElementById('dns2').disabled = !this.checked;
        });
    }
    // Chamada para a função de criação de formulário que inclui DNS
    window.onload = function() {
        document.querySelectorAll('input[name="profile"]').forEach(radio => {
            radio.addEventListener('change', getProfileAtendimento);
        });

        // Adiciona event listeners para os checkboxes DNS após a criação dos formulários
        if (document.getElementById('forms')) {
            document.getElementById('forms').innerHTML = createFormularioTecnico();
            addDNSEventListeners();
        }
    };

    // Função principal para criar o formulário técnico completo
    function createFormularioTecnico() {

        return `<form id="form_tecnico">
                    ${createVoalleDumpField()}
                    ${createMatrixDumpField()}
                    ${createSolicitanteField()}
                    ${createContatoField()}
                    ${createRelatoField()}
                    ${createProcedimentoField()}
                    ${createDNSFields()}
                    ${createPossivelSolucaoField()}
                    ${createSinalField()}
                    ${createCheckboxOptions()}
                    ${createAcessoRemotoCheckbox()}
                    ${createAtendimentoField()}
                    ${createEndereçoField()}
                    ${createCidadeField()}
                    ${createMelhorPeriodoField()}
                    <button type="button" onclick="submitForm('form_tecnico')">Enviar</button>
                </form>`;
    }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

//Funções de coletas de dados

    //Verifica os dados do Radio Input para verificar qual chamada de função deve fazer
    function getProfileAtendimento(event) {
        const profile = event.target.value;
        const container = document.getElementById('forms');
        if (container) {
            const currentFormId = container.querySelector('form')?.id;
            if (currentFormId) {
                saveFormData(currentFormId);
            }

            if (profile === 'tecnico') {
                container.innerHTML = createFormularioTecnico();
                loadFormData('form_tecnico');
                addDNSEventListeners();
                hideContainer();
            }
            } else {
                container.innerHTML = callErro();
            }
    }
    function callErro() {
        return `<p> Erro ao estabelecer seleção de profile </p>`
    }

    // Recebe em Array os valores preenchidos no forms
    function getFormValues(formId) {
        const form = document.getElementById(formId);
        if (!form) return [];

        const formData = new FormData(form);
        const values = [];

        // Adicionar valores dos inputs de texto e selects
        formData.forEach((value, key) => {
            values.push({ [key]: value });
        });

        // Adicionar valores dos checkboxes que não estão incluídos em FormData
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            values.push({ [checkbox.name]: checkbox.checked });
        });

        return values;
    }

    //Pega especificamente somente as checkbox marcadas
    function getCheckboxValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkboxes).map(cb => cb.value);
    }

    //Função quando cliente clica em "Enviar" para chamada das funções de retorno e formatação
    function submitForm(formId){
        const retorno = document.getElementById('ordem')
        if(formId == 'form_tecnico'){
            const values = getFormValues(formId);
            const selectedAlarms = getCheckboxValues('opcao');
            let cont = 0;
            const lengths = {};
            values.forEach(item => {
                for (const [key, value] of Object.entries(item)) {
                    if (typeof value === 'string') {
                        lengths[key] = value.length;
                    }
                }
            });
            if(selectedAlarms.length == 0) cont++;
            if(lengths.solucao == 0) cont++;
            if(selectedAlarms.length == 0) cont++;
            if(lengths.endereco == 0) cont++;
            if(lengths.cidade == 0) cont++;
            if(lengths.periodo == 0) cont++;
            if(cont<=3){
                retorno.innerHTML = visitaTecnica();
                showContainer();
            }
            else{
                retorno.innerHTML = resolvidoSuporte();
                showContainer();
            }
        }
    };

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

// Funções de retorno final, tratativas finais e demontração ao usuário

//Função para preparar, validar e demonstrar dados em modelo "Resolvido Suporte"
function resolvidoSuporte(){
    
    let cont = 0;
    var dns = ""
    if(document.getElementById('dns1_checkbox').checked && document.getElementById('dns2_checkbox').checked) {
        dns = "DNS primário "+document.getElementById('dns1').value+" DNS secundário "+document.getElementById('dns2').value;
        cont+=4;
    }
    else if(document.getElementById('dns1_checkbox').checked) {
        dns = "DNS Primário " + document.getElementById('dns1').value;
        cont+=2;
    }
    else if(document.getElementById('dns2_checkbox').checked) {
        dns = "DNS Secundário " + document.getElementById('dns2').value;
        cont+=2;
    }
    else dns = "Dns não alterado";
    const valuesArray = getFormValues('form_tecnico');
    const values = valuesArray.reduce((acc, item) => {
        for (const [key, value] of Object.entries(item)) {
            acc[key] = value;
        }
        return acc;
    }, {});
    const relato = document.getElementById('relato').value;
    const procedimento = document.getElementById('procedimento').value;
    const sinal = document.getElementById('sinal').value;
    const array = Object.keys(values).map(key => values[key]);
    let matrix_info = Info_Extraction_Matrix(array[1]);
    let voalle_info = Info_Extraction_Voalle(array[0]);
    let atendimento = '';
    if(!matrix_info[0]) {
        matrix_info[0] = array[2];
        matrix_info[1] = array[3];
        atendimento = array[8+cont];
    }
    else atendimento = 'Matrix'
    console.log(matrix_info, "batatinha")
    if(voalle_info[1] != matrix_info[1] && matrix_info[1]!=null && voalle_info[1]!=null) alert("TELEFONE NO MATRIX E VOALLE NÃO BATEM. VERIFICAR!");
    console.log(array)
    return `
    <p>Solicitante: ${matrix_info[0]};
    <p>Contato: ${matrix_info[1]};
    <p>Relato: ${relato};
    <p>Procedimento Realizado: ${procedimento}, ${dns};
    <p>Sinal: ${"-"+ sinal +"dBm"}
    <p>Canal de atendimento: ${atendimento};</p><br>
    `;
}
    //Função para preparar, validar e demonstrar dados em modelo "Visita técnica"
    function visitaTecnica(){
        let atendimento = '';
        const valuesArray = getFormValues('form_tecnico');
        const values = valuesArray.reduce((acc, item) => {
            for (const [key, value] of Object.entries(item)) {
                acc[key] = value;
            }
            return acc;
        }, {});
        const array = Object.keys(values).map(key => values[key]);
        let cont = 0;
        let cont_dns = 0;
        var dns = ""
        if(document.getElementById('dns1_checkbox').checked && document.getElementById('dns2_checkbox').checked) {
            dns = "DNS primário "+document.getElementById('dns1').value+" DNS secundário "+document.getElementById('dns2').value;
            cont_dns+=4;
        }
        else if(document.getElementById('dns1_checkbox').checked) {
            dns = "DNS Primário " + document.getElementById('dns1').value;
            cont_dns+=2;
        }
        else if(document.getElementById('dns2_checkbox').checked) {
            dns = "DNS Secundário " + document.getElementById('dns2').value;
            cont_dns+=2;
        }
        else dns = "";
        const selectedAlarms = getCheckboxValues('opcao')
        var alarmes = selectedAlarms.join(', ')
        var remoto = ""
        if(!(document.getElementById('acesso_remoto').checked)) remoto = "NÃO TEM ACESSO REMOTO";
        else {
            remoto = "Tem acesso remoto";
            cont++;
        }
        if(alarmes.length<=0) alarmes = "SEM ALARMES";
        else cont ++;
        var sinal = document.getElementById('sinal').value;
        if(selectedAlarms.includes("LOS") || selectedAlarms.includes("DYING GASP")) sinal = "SEM SINAL";
        else sinal = "-"+sinal+"dBm";
        let matrix_info = Info_Extraction_Matrix(array[1]);
        let voalle_info = Info_Extraction_Voalle(array[0]);
        let cidade = document.getElementById('cidade').value;
        if(voalle_info[1] != matrix_info[1] && matrix_info[1]!=null && voalle_info[1]!=null) alert("TELEFONE NO MATRIX E VOALLE NÃO BATEM. VERIFICAR!");
        if(!matrix_info[0]) {
            matrix_info[1] = array[3];
            matrix_info[0] = array[2]
            atendimento = array[8+cont];
        }
        else atendimento = 'Matrix';
        if(!voalle_info[0]) voalle_info[0] = array[9+cont+cont_dns]
        else cidade = "Preenchido logo acima.";
        console.log(array)
        return `
        <p>Solicitante: ${matrix_info[0]};
        <p>Contato: ${matrix_info[1]};
        <p>Relato: ${document.getElementById('relato').value};
        <p>Procedimento Realizado: ${document.getElementById('procedimento').value}, ${dns}
        <p>Possivel Solução: ${document.getElementById('solucao').value};
        <p>Sinal: ${sinal}
        <p>Alarmes: ${alarmes}
        <p>Acesso remoto: ${remoto}
        <p>Canal de atendimento: ${atendimento};
        <p>Endereço: ${voalle_info[0]}
        <p>Cidade: ${cidade}
        <p>Melhor Periodo para visita: ${document.getElementById('periodo').value}
        `
    }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

// Funções para funcionamento da extração das informações do Matrix e Voalle

    //Função para extrair dados do matrix com REGEX
    function Info_Extraction_Matrix(_input_text_content)
    {
        if(_input_text_content){
        let _name_matrix  = Normalize_Text(_input_text_content.match(/Nome: ([A-Za-zÀ-ú\d\w\s\S\(\.\-]+)(?=Telefone)/)[1]);
        let _phone_matrix = Normalize_Text(_input_text_content.match(/Telefone: (\d+)(?=E-mail:)/)              [1]);

        return [_name_matrix, _phone_matrix];}
        else return [null, null];
    }
    //Função para extrair dados do Voalle usando REGEX
    function Info_Extraction_Voalle(_input_text_content)
    {
        if(_input_text_content){
        let _phone = Normalize_Phone(_input_text_content.match(/CELULAR([A-Za-zÀ-ú\d\w\s\S\(\.\-]+)(?=CPF)/)    [1]);
        let _street   = Normalize_Text(_input_text_content.match(/RUA([A-Za-zÀ-ú\w\s\S\.\-]+)(?=NÚMERO)/)   [1]);
        let _number   = Normalize_Text(_input_text_content.match(/NÚMERO([\d\w\s\S]+)(?=BAIRRO)/)           [1]);
        let _district = Normalize_Text(_input_text_content.match(/BAIRRO([A-Za-zÀ-ú\w\s\S\.\-]+)(?=CIDADE)/)[1]);
        let _city     = Normalize_Text(_input_text_content.match(/CIDADE([A-Za-zÀ-ú\w\s\S\.\-]+)(?=ESTADO)/)[1]);
        let _address = [_street, _number, _district, _city];
        return [_address, _phone];}
        else return [null, null];
    }
    // Funções para normalização dos dados antes de regex
    function Normalize_Text (_input) { return _input = _input.trim().toLowerCase().replace(/(?:^|\s)\S/g, char => char.toUpperCase());         }
    function Normalize_Phone(_input) { return _input.trim().replace(/[\s\(\)\-]/g, '').replace(/^(\d{2})?(\d{2})(\d{5})(\d{4})$/, '55$2$3$4'); }
    
    //Verifica e valida os dados do Voalle do cliente
    function reconVoalle(){
        recon = Info_Extraction_Voalle(document.getElementById('Voalle').value);
        endereco = document.getElementById('endereco')
        if(!recon[0]){
            endereco.value = '';
            endereco.disabled = false;
            document.getElementById('cidade').value = '';
            document.getElementById('cidade').disabled = false;
        }
        else{
            endereco.value = recon[0];
            endereco.disabled = true;
            document.getElementById('cidade').value = 'Já preenchido';
            document.getElementById('cidade').disabled = true;
        }
    }
    ////Verifica e valida os dados do Matrix do cliente
    function reconMatrix(){
        atendimento = document.getElementById('atendimento');
        solicitante = document.getElementById('solicitante');
        contato = document.getElementById('contato');
        recon = Info_Extraction_Matrix(document.getElementById('Matrix').value)
        
        if(!recon[0]){
            atendimento.value = '';
            atendimento.disabled = false;
            solicitante.value = '';
            solicitante.disabled = false;
            contato.value = '';
            contato.disabled = false;
        }
        else{
            atendimento.value = 'Matrix';
            atendimento.disabled = true;
            solicitante.value = recon[0];
            solicitante.disabled = true;
            contato.value = recon[1];
            contato.disabled = true; 
        }
        mudaTitle();
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\\

// Funções visuais e utilitárias

    //Função para mostrar conteiner OS
    function showContainer() {
        var container = document.getElementById('os');
        container.style.display = 'flex'; 
    }
    //Função para esconder conteiner OS
    function hideContainer() {
        var container = document.getElementById('os');
        container.style.display = 'none'; 
    }
    //Função para mudar o icone da página
    function mudaTitle(){
        document.title = document.getElementById('solicitante').value;
    }
    // Copia conteudo da DIV para o Clipboard
    function copyContent() {
        var content = document.getElementById('ordem').innerText;
        navigator.clipboard.writeText(content).then(function() {
            console.log('copiado')
        }, function(err) {
            console.error('Erro ao copiar: ', err);
        });
    }
    // Salva as informações de seu forms enqunanto a página não é recarregada
    function saveFormData(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            data[checkbox.name] = checkbox.checked;
        });

        localStorage.setItem(formId, JSON.stringify(data));
    }
    // Carrega informações outrora salvas
    function loadFormData(formId) {
        const data = JSON.parse(localStorage.getItem(formId)) || {};

        const form = document.getElementById(formId);
        if (!form) return;

        for (const [key, value] of Object.entries(data)) {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                if (input.type === 'checkbox') {
                    input.checked = value;
                } else {
                    input.value = value;
                }
            }
        }
    }