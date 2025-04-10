import * as monaco from 'monaco-editor'; // library to use monaco editor

const snippets_basales = {
    // Diagnósticos obste
    'dg_ingreso_egreso_gine': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            `## Diagnósticos ingreso:`,
            '1. ${1:Multípara de} ${2:num}, ${3:edad} años',
            '2. Embarazo de ${4:num} semanas por FUR${5:op}',
            '3. Trabajo de parto fase ${6:activa}',
            '4. IMC ${7:num}',
            '5. Riesgo tromboembólico ${8:num}',
            '## Diagnósticos egreso:',
            '1. ${9:Multípara de} ${10:num}, ${3:edad} años',
            '2. Puérpera ${11:2} días ${12:parto vaginal/cesárea}',

        ].join('\n'),
        detail: 'Diagnósticos ingreso y egreso'
    },
    'multípara': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'multípara de ${1:num}',
        detail: 'Multípara'
    },
    'primípara': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'primípara',
        detail: 'Primípara'
    },
    'nulípara': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'nulípara',
        detail: 'Nulípara'
    
    },

    // síntomas comunes
    'contracciones_utrinas': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'contracciones uterinas dolorosas ${1:cantidad y otros síntomas}',
        detail: 'Contracciones uterinas'
    },
    'dilatación_cervical': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'dilatación cervical ${1:num} cm, borramiento ${2:num}%, centrado',
        detail: 'Dilatación cervical'
    },
    'trabajo_parto': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'trabajo de parto en fase ${1:activa}',
        detail: 'Trabajo de parto'
    },
    'dolor_abdominal': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'dolor abdominal ${1:localización y características}, intensidad ${2:num}',
        detail: 'Dolor abdominal'
    },
    'sangrado_genital': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'sangrado genital ${1:características}',
        detail: 'Sangrado genital'
    },
    'movimientos_fetales': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'movimientos fetales ${1:num}',
        detail: 'Movimientos fetales'
    },
    'nauseas_vomitos': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'náuseas ${1:y} vómitos${2}',
        detail: 'Náuseas y vómitos'
    },
    'sin_otras_complicaciones': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'sin otras complicaciones',
        detail: 'Sin otras complicaciones'
    },
    



    // Procedimientos
    'parto_vaginal': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Parto vaginal espontáneo (${1:fecha} a las ${2:hora}), sin complicaciones. PN: ${3:num} g, Talla ${4:num} cm, APGAR ${5:num}-${6:num}',
        ].join('\n'),
        detail: 'Parto PTVE'
    },
    'cesarea': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Cesárea (${1:fecha} a las ${2:hora}), sin complicaciones. PN: ${3:num} g, Talla ${4:num} cm, APGAR ${5:num}-${6:num}',
        ].join('\n'),
        detail: 'Cesárea'
    },

    // examenes
    'ex_hemograma': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Hb ${1:num}, Leucocitos ${2:num}, Plaquetas ${3:num}',
        description: 'Examen hemograma',
        detail: 'Hemograma'
    },
    'ex_coagulacion': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'INR ${1:num}, TP ${2:num}%, TTPK ${3:num}s',
        description: 'Examen coagulación',
        detail: 'Coagulación'
    },
    'ex_hepatico': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'GOT ${1:num}, GPT ${2:num}, BT ${3:num}, BD ${4:num}, GGT ${5:num}, FA ${6:num}',
        description: 'Examen hepático',
        detail: 'Hepático'
    },
    'ex_función_renal': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Creatinina ${1:num}, BUN ${2:num}',
        description: 'Examen función renal',
        detail: 'Función renal'
    },
    'ex_registro_basal_no_estresante': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Registro basal no estresante: ${1:reactivo}',
        description: 'Examen registro basal no estresante',
        detail: 'Registro basal no estresante'
    },
    'ex_ecografia': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ecografía: ${1:gestación única viva, presentación cefálica, líquido amniótico normal, placenta anterior}',
        description: 'Examen ecografía',
        detail: 'Ecografía'
    },

    //Resumen
    'resumen_puerpera': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Usuaria de ${1:edad} años, ${2:multípara}, cursando embarazo de ${3:num} semanas por FUR. Consulta al servicio de urgencias por contracciones uterinas dolorosas ${4:cantidad y otros síntomas}. Al examen físico se constata dilatación cervical ${5:num}cm, borramiento ${6:num}%, centrado.',
            'Se decide ingreso por ${7:trabajo de parto en fase activa}.',
            '',
            'Evoluciona ${8:evolución}. Se asiste parto vaginal, finalizando embarazo el ${8:fecha} a las ${9:hora} horas, sin complicaciones. Se recibe recién nacido de sexo ${10:sexo}, Peso ${11:PN} g, Talla ${12:TN} cm, APGAR ${13}-${14}. En puerperio evoluciona con buen manejo del dolor, con loquios hemáticos normales, logrando lactancia materna sin dificultades. Dada evolución favorable, se decide dar alta.',
        ].join('\n'),
        detail: 'Resumen puerpera'
    },

    // combo medicamentos partos 
    'combo_fco_parto': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
        '- Paracetamol ${1:1 gr} cada ${2:8 horas} ${3:ev}',
        '- Ketoprofeno ${4:100 mg} cada ${5:8 horas} ${6:ev}',
        '- Ampicilina según protocolo de profilaxis sepsis neonatal',
        '- Anestesia ${7:peridural}',
        '- Oxitocina según protocolo${8: de inducción}',
        ].join('\n'),
        detail: 'Combo fármacos parto'
    },

    // Fármacos
    'paracetamol_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Paracetamol 1 gr cada 8 horas vía oral por ${1:5} días ${2:en caso de dolor}',
        description: 'Indicación paracetamol vía oral',
        detail: 'paracetamol vía oral'
    },
    'paracetamol_ev': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Paracetamol 1 gr cada 8 horas vía endovenosa',
        description: 'Indicación paracetamol vía endovenosa',
        detail: 'paracetamol vía endovenosa'
    },


    'ketoprofeno_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ketoprofeno 50 mg cada 8 horas vía oral por ${1:3} días ${2:en caso de dolor}',
        description: 'Indicación ketoprofeno vía oral',
        detail: 'ketoprofeno vía oral'
    },
    'ketoprofeno_ev': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ketoprofeno 100 mg cada 8 horas vía endovenosa',
        description: 'Indicación ketoprofeno vía endovenosa',
        detail: 'ketoprofeno vía endovenosa'
    },

    'fcos_uso_habitual': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Reiniciar fármacos de uso habitual${1}',
        description: 'Indicación fármacos de uso habitual',
        detail: 'Fármacos de uso habitual'
    },

    // Indicaciones
    'plantilla_indicaciones_gine': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `
**Generales**:
1. Reposo relativo
2. Régimen liviano
3. Lactancia materna según indicación de pediatría
4. Abstinencia sexual por 40 días
5. Aseo genital con agua, no utilizar jabón, secar con toques, no frotar

**Fármacos**:
  
1. Paracetamol 1 gr cada 8 horas por 5 días en caso de dolor
2. Ketoprofeno 50 mg cada 8 horas por 3 días en caso de dolor

**Controles**:
1. Control en 5-7 días con matrona en su CESFAM, debe acudir con recién nacido y solicitar hora con anticipación
2. En caso de presentar irritabilidad marcada, rechazo a recién nacido, pena persistente o síntomas similares, acudir a su CESFAM para orientación y manejo.
3. Consultar en urgencias en caso de síntomas de alarma tales como: \${1:dolor abdominal que no cede con analgesia, sangrado genital abundante, fiebre, dificultad respiratoria, u otros síntomas que estime deban recibir atención médica de urgencias}.
`,
        detail: 'Plantilla de indicaciones'
    },

    'reposo_regimen': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Reposo ${1:relativo}',
            'Régimen ${2:liviano}',
        ].join('\n'),
        detail: 'Reposo y régimen alimenticio',        
    },
    'control_puerperio':{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Control${1: de la díada} en ${2:5-7} días con ${3:matrona}, en ${4:CESFAM correspondiente}, agendar hora. ${5:Debe acudir con recién nacido}',
            'En caso de presentar irritabilidad marcada, rechazo a recién nacido, pena persistente o síntomas similares, acudir a su CESFAM para orientación y manejo$6',
        ].join('\n'),
        detail: 'Control y consulta en urgencias'
    },
    'sos':{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Consultar en urgencias en caso de síntomas de alarma tales como: ${1:dolor abdominal que no cede con analgesia, sangrado genital abundante, fiebre, dificultad respiratoria, u otros síntomas que estime deban recibir atención médica de urgencias}.',
        description: 'Indicación de consulta en urgencias',
        detail: 'Consulta sos en urgencias'
    },

    // copia del sheets
    "remota": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Antecedentes médicos: ${1:Hipertensión arterial, Diabetes mellitus, }\n- Fármacos: ${2:fcos por aquí}\n- Alergias: ${3:niega}\n- Antecedentes quirúrgicos: ${4:cirugías}\n- Hábitos: Tabaco (${5:+/-}), Alcohol (${6:+/-}), Drogas (${7:+/-})",
        detail: "Anamnesis remota simple"
    },
    "ef_normal_sv": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- SV: T° ${1:num}°C, FC ${2:num} lpm, PA ${3:num}/${4:num} mmHg, FR ${5:num} rpm, SatO2 ${6:num}%\n- Mucosas ${7:hidratadas}, bien perfundida a distal\n- Tórax: ${8:RR2TSS}, ${9:MP(+) SRA}\n- Abdomen: ${10:Depresible}, ${11: indoloro a la palpación, no palpo masas ni visceromegalias}, ${12: sin signos de irritación peritoneal}\n- Extremidades: ${13: sin edema ni signos de trombosis venosa profunda}",
        detail: "Examen físico"
    },
    "ef_normal":{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Mucosas ${7:hidratadas}, bien perfundida a distal\n- Tórax: ${8:RR2TSS}, ${9:MP(+) SRA}\n- Abdomen: ${10:Depresible}, ${11: indoloro a la palpación}, ${12: sin signos de irritación peritoneal}\n- Extremidades: ${13: sin edema ni signos de trombosis venosa profunda}",
        detail: "Examen físico"
    },
    "ef_normal_og": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- SV: T° ${1:num}°C, FC ${2:num} lpm, PA ${3:num}/${4:num} mmHg, FR ${5:num} rpm, SatO2 ${6:num}%\n- Mucosas ${7:hidratadas}, bien perfundida a distal\n- Tórax: ${8:RR2TSS}, ${9:MP(+) SRA}\n- Abdomen: ${10:Depresible}, ${11: indoloro a la palpación}, ${12: sin signos de irritación peritoneal}\n- Extremidades: ${13: sin edema ni signos de trombosis venosa profunda}\n- Especuloscopía: ${14: sin lesiones, sin sangrado}\n- TV: ${15: cuello posterior, firme, cerrado}",
        detail: "Examen físico Gineco-Obstétrico"
    },
    "ef_neuro_completo": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- En vigilia espontánea, orientado en tiempo, espacio y persona\r\n- Lenguaje espontáneo fluente, nomina 7/7, repite 7/7, comprende órdenes de 3 comandos, sin parafasias, sin disartria\r\n- Memoria de trabajo, semántica, episódica y procedimental conservadas\r\n- Sin alteraciones de las funciones ejecutivas\r\n- Pares craneanos: \r\n    - Agudeza visual por cuenta dedos conservada, campos visuales conservados, reflejo fotomotor directo y consensuado conservado\r\n    - Oculomotilidad conservada, sin nistagmus, sin diplopía\r\n    - Reflejo corneal conservado\r\n    - Sensibilidad facial conservada, sin paresia de músculos masticatorios\r\n    - Mímica facial simétrica, sin desviación de la comisura labial\r\n    - Audición conservada\r\n    - Velo del paladar simétrico, sin desviación de la úvula, reflejo nauseoso conservado\r\n    - Lengua en reposo sin fasciculaciones, sin desviación, sin atrofias, ni movimientos involuntarios. Protruye sin desviación, sin disminución de la fuerza. \r\n    - Elevación de hombros y rotación de cabeza conservados\r\n- Mínima paresia (-) en miembros superiores e inferiores\r\n- EESS y EEII trofismo y tono conservado, sin alteraciones de la fuerza ni sensibilidad en miembros superiores e inferiores\r\n- Reflejos osteotendíneos simétricos y conservados\r\n- Reflejos superficiales (-), sin signos de liberación frontal\r\n- Sin alteraciones de la sensibilidad superficial ni profunda\r\n- Sin alteraciones de la marcha\r\n- Romberg (-) Unterberger (-)\r\n- Sin dismetrías ni disdiadococinesias\r\n- Kerning y Brudzinski (-)",
        detail: "Examen físico neurológico"
    },
    "ef_neuro_una_linea": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Paciente en vigilia espontanea, orientado en tiempo, espacio y persona. Lenguaje fluente, sin alteraciones de la memoria, funciones ejecutivas conservadas. Pares craneales sin alteraciones, sin paresias ni alteraciones de la sensibilidad en miembros superiores e inferiores. Reflejos osteotendíneos simétricos y conservados, reflejos superficiales (-), sin signos de liberación frontal. Sensibilidad superficial y profunda conservadas. Sin alteraciones del equilibrio o la marcha. Sin dismetrías ni disdiadococinesias. Signos meníngeos (-)\r\n",
        detail: "ef neuro resumido"
    },
    "ef_vertigo": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Head impulse test: ${1:positivo/negativo}\r\n- Oculomotilidad: ${2:movimientos oculares conservados, sin nistagmus}\r\n- Test of Skew: ${3:positivo/negativo}\r\n- ${4:Audición conservada}\r\n- Test de Romberg: ${5:positivo/negativo}\r\n- Dix-Hallpike: ${6:positivo/negativo}\r",
        detail: "Examen físico vértigo"
    },
    "dg_gine_obste": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "## Diagnósticos ingreso:\r\n1. ${1:Multípara de} ${2:num}, ${3:edad} años\r\n2. Embarazo de ${4:num} semanas por FUR${5:op}\r\n3. Trabajo de parto fase ${6:activa}\r\n4. IMC ${7:num}\r\n5. Riesgo tromboembólico ${8:num}\r\n",
        detail: "dg gine"
    },
    "ex_hemograma": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Hb ${1:num}, Leucocitos ${2:num}, Plaquetas ${3:num}",
        "description": "Examen hemograma",
        detail: "Hemograma"
    },
    "ex_coagulacion": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "INR ${1:num}, TP ${2:num}%, TTPK ${3:num}s",
        "description": "Examen coagulación",
        detail: "Coagulación"
    },
    "ex_hepatico": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "GOT ${1:num}, GPT ${2:num}, BT ${3:num}, BD ${4:num}, GGT ${5:num}, FA ${6:num}",
        "description": "Examen hepático",
        detail: "Hepático"
    },
    "ex_funcion_renal": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Creatinina ${1:num}, BUN ${2:num}, Na ${3:num}, K ${4:num}, Cl ${5:num}\n- pH ${6:num}, pCO2 ${7:num}, HCO3 ${9:num}, BE ${10:num}",
        detail: "renal"
    },
    "ex_orina_completa": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- OC ${1:no inflamatoria, sin hematuria}",
        detail: "orina completa"
    },
    "tto_hta_hearts_inicio": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "1. Hábitos de vida\r\n    - Educación sobre alimentación saludable, derivación a nutrición\r\n    - Evitar alimentos altos en sodio, máximo utilizar 2 g de sal de mesa al día (equivalente a 1 tapa de lápiz bic)\r\n    - Realizar al menos 150 minutos de actividad física a la semana (equivalente a 30 minutos 5 veces a la semana)\r\n    - ${1:Mantener masa corporal saludable, ej IMC 18.5 a 24.9}\r\n    - ${2:Consejería de cese tabáquico y evitar exposición pasiva a humo de tabaco}\r\n    - ${3:Evitar consumo de alcohol}\r\n2. Fármacos: \r\n    - Losartán 50 mg, ${4:1} comprimido${5:s} vía oral cada 24 horas\r\n    - Amlodipino 5 mg, ${4:1} comprimido${5:s} vía oral cada 24 horas\r\n    - ${6:Hidroclorotiazida 50 mg 1/2 compromido cada 24 horas}\r\n3. Controles:\r\n    - Asistir a perfil de presión arterial en 3 a 4 semanas desde inicio de tratamiento\r\n    - Asistir a control médico con resultado de perfil de presión arterial",
        detail: "inicio tratamiento hipertensión arterial"
    },
    "ef_mental": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Aspecto general y conducta: ${1:Bien aseado, vestido adecuadamente para la edad y situación, actitud cooperadora}\n- Conciencia: ${2:Alerta, atento y orientado en tiempo, espacio y persona}\n- Psicomotricidad: ${3:Marcha y postura normales, tono muscular adecuado, gesticulación y contacto visual adecuados}\n- Lenguaje: ${4:Espontáneo, velocidad y volumen normales. Notificativo}\n- Pensamiento: ${5:Coherente, lógico, sin ideas delirantes o obsesivas}\n- Sensopercepción: ${6:Sin ilusiones, alucinaciones ni pseudoalucinaciones}\n- Afectividad: ${7:Afecto adecuado, congruente con el contexto, sin labilidad emocional}\n- Nivel Cognitivo: ${8:Capacidad de abstracción y memoria adecuadas, escolaridad completa}\n- Juicio de realidad: ${9:Juicio intacto, buen reconocimiento de la realidad y conducta apropiada}",
        detail: "examen mental normal"
    },
    "ecg_descripcion": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "FC ${1:num} lpm, ritmo sinusal, conducción AV normal (PR ${2:120-200}), conducción interventricular normal (QRS ${3:< 120}ms), eje y amplitud QRS normal, sin alteraciones de repolarización, QTc ${4:340 - 460 ms}\n${5:Recordatorio rangos\n| Parámetro | referencia normal |\n|-|-|\n| 5 cuadritos (cdto)    | 200 ms              |\n| 5 cuadros (cdo)       | 1 s                 |\n| 5cdo x 6 = 30 cdo     | 6 segundos          |\n|               P       | < 0.12 s y < 0.25 mV|\n|               PR      | 120-200 ms          |\n|               QRS     | < 120 ms (3cdto)    |\n|               QT      | < 440 ms (< 1/2 RR anterior)     |\n| QTc (QT ms / sqrt(RR s)) | < 450 ms ♂, < 460ms ♀, >340ms  |}",
        detail: "descripcion ecg normal"
    },
    "depresion_sn_dsm": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Animo deprimido ${1:(+/-)}\r\n- Apatía/pérdida de interés ${2:(+/-)}\r\n\r\nOtros:\r\n- Cambios apetito o peso ${3:(+/-)}\r\n- Alteraciones en sueño ${4:(+/-)}\r\n- Agitación o retraso psicomotor ${5:(+/-)}\r\n- Fatiga  ${6:(+/-)}\r\n- Sentimiento de inutilidad o culpabilidad  ${7:(+/-)}\r\n- Función ejecutiva: disminución concentración, capacidad para pensar ${8:(+/}-)\r\n- Ideación suicida ${9:(+/-)}\r\n\r\nGravedad según cantidad síntomas, intensidad, y compromiso funcional social y laboral: ${10:(leve/moderada/grave)}",
        detail: "Síntomas criterios diagnósticos DSM-V"
    },
    "depresion_susp_isrs": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Mareos\r\n- Aturdimiento\r\n- Vértigo o sensación de desmayo \r\n- Sensaciones de parestesia\r\n- Ansiedad\r\n- Diarrea\r\n- Fatiga\r\n- Inestabilidad en la marcha\r\n- Dolor de cabeza\r\n- Insomnio\r\n- Irritabilidad\r\n- Náuseas o vómitos\r\n- Temblores \r\n- Alteraciones visuales\r",
        detail: "sintomas sd serotoninérgico suspensión isrs"
    },
    "litiasis_tto_medico_expulsivo": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Analgesia: ketorolaco 10 mg vía oral cada 8 horas por 5 días\n- Hidratación abundante con agua\n- Tamsulosina 0.4 mg vía oral cada 24 horas por 4 semanas\n- Control en 4 semanas\n- Observar expulsión de cálculo. Control SOS en caso de disminución de dolor asociado a disminución de diuresis",
        detail: "solo litiasis < 10mm ureter distal, menor a 4 semanas"
    },
    "depresion_plan": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Plan:\n- Consejería breve\n    - Establecer metas pequeñas y alcanzables\n    - Identificar pensamientos negativos y buscar herramientas para interrumpirlos\n    - Recomendación mindfullnes para enfocarse en las sensaciones del momento presente y desconectarse\n    - Planificación del día noche anterior, establecer metas pequeñas y alcanzables. Si no se logra alcanzar metas, usarlo como oportunidad de aprendizaje\n    - Alguien con quien hablar\n- Realizar actividad física, de preferencia ejercicio físico aeróbico\n- Iniciar psicoterapia\n- Tratamiento farmacológico:\n    - Sertralina 50mg/día por 4 días, luego 100mg/día\n    \n    o\n    \n    - Escitalopram 5mg/día por 4 días, luego 10mg/día\n- Control en 2 semanas",
        detail: "plan"
    },
    "escitalopram": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Escitalopram 10mg, 1/2 comprimido vía oral por 4 días, luego 1 comprimido vía oral por 3 meses",
        detail: "fármaco"
    },
    "sertralina": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Sertralina 50mg, 1/2 comprimido (25mg) vía oral por 4 días, luego 1 comprimido vía oral por 3 meses",
        detail: "fármaco"
    },
    "dg_ingreso_egreso_gine": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "## Diagnósticos ingreso:\n1. ${1:Multípara de} ${2:num}, ${3:edad} años\n2. Embarazo de ${4:num} semanas por FUR${5:op}\n3. Trabajo de parto fase ${6:activa}\n4. IMC ${7:num}\n5. Riesgo tromboembólico ${8:num}\n## Diagnósticos egreso:\n1. ${9:Multípara de} ${10:num}, ${3:edad} años\n2. Puérpera ${11:2} días ${12:parto vaginal/cesárea}",
        detail: "Diagnósticos ingreso y egreso"
    },
    "multípara": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "multípara de ${1:num}",
        detail: "Multípara"
    },
    "primípara": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "primípara",
        detail: "Primípara"
    },
    "nulípara": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "nulípara",
        detail: "Nulípara"
    },
    "contracciones_utrinas": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "contracciones uterinas dolorosas ${1:cantidad y otros síntomas}",
        detail: "Contracciones uterinas"
    },
    "dilatación_cervical": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "dilatación cervical ${1:num} cm, borramiento ${2:num}%, centrado",
        detail: "Dilatación cervical"
    },
    "trabajo_parto": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "trabajo de parto en fase ${1:activa}",
        detail: "Trabajo de parto"
    },
    "dolor_abdominal": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "dolor abdominal ${1:localización y características}, intensidad ${2:num}",
        detail: "Dolor abdominal"
    },
    "sangrado_genital": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "sangrado genital ${1:características}",
        detail: "Sangrado genital"
    },
    "movimientos_fetales": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "movimientos fetales ${1:num}",
        detail: "Movimientos fetales"
    },
    "nauseas_vomitos": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "náuseas ${1:y} vómitos${2}",
        detail: "Náuseas y vómitos"
    },
    "sin_otras_complicaciones": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "sin otras complicaciones",
        detail: "Sin otras complicaciones"
    },
    "parto_vaginal": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Parto vaginal espontáneo (${1:fecha} a las ${2:hora}), sin complicaciones. PN: ${3:num} g, Talla ${4:num} cm, APGAR ${5:num}-${6:num}",
        detail: "Parto PTVE"
    },
    "cesarea": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Cesárea (${1:fecha} a las ${2:hora}), sin complicaciones. PN: ${3:num} g, Talla ${4:num} cm, APGAR ${5:num}-${6:num}",
        detail: "Cesárea"
    },
    "ex_función_renal": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Creatinina ${1:num}, BUN ${2:num}",
        "description": "Examen función renal",
        detail: "Función renal"
    },
    "ex_registro_basal_no_estresante": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Registro basal no estresante: ${1:reactivo}",
        "description": "Examen registro basal no estresante",
        detail: "Registro basal no estresante"
    },
    "ex_ecografia": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Ecografía: ${1:gestación única viva, presentación cefálica, líquido amniótico normal, placenta anterior}",
        "description": "Examen ecografía",
        detail: "Ecografía"
    },
    "resumen_puerpera": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Usuaria de ${1:edad} años, ${2:multípara}, cursando embarazo de ${3:num} semanas por FUR. Consulta al servicio de urgencias por contracciones uterinas dolorosas ${4:cantidad y otros síntomas}. Al examen físico se constata dilatación cervical ${5:num}cm, borramiento ${6:num}%, centrado.\nSe decide ingreso por ${7:trabajo de parto en fase activa}.\n\nEvoluciona ${8:evolución}. Se asiste parto vaginal, finalizando embarazo el ${8:fecha} a las ${9:hora} horas, sin complicaciones. Se recibe recién nacido de sexo ${10:sexo}, Peso ${11:PN} g, Talla ${12:TN} cm, APGAR ${13}-${14}. En puerperio evoluciona con buen manejo del dolor, con loquios hemáticos normales, logrando lactancia materna sin dificultades. Dada evolución favorable, se decide dar alta.",
        detail: "Resumen puerpera"
    },
    "combo_fco_parto": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "- Paracetamol ${1:1 gr} cada ${2:8 horas} ${3:ev}\n- Ketoprofeno ${4:100 mg} cada ${5:8 horas} ${6:ev}\n- Ampicilina según protocolo de profilaxis sepsis neonatal\n- Anestesia ${7:peridural}\n- Oxitocina según protocolo${8: de inducción}",
        detail: "Combo fármacos parto"
    },
    "paracetamol_vo": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Paracetamol 1 gr cada 8 horas vía oral por ${1:5} días ${2:en caso de dolor}",
        "description": "Indicación paracetamol vía oral",
        detail: "paracetamol vía oral"
    },
    "paracetamol_ev": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Paracetamol 1 gr cada 8 horas vía endovenosa",
        "description": "Indicación paracetamol vía endovenosa",
        detail: "paracetamol vía endovenosa"
    },
    "ketoprofeno_vo": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Ketoprofeno 50 mg cada 8 horas vía oral por ${1:3} días ${2:en caso de dolor}",
        "description": "Indicación ketoprofeno vía oral",
        detail: "ketoprofeno vía oral"
    },
    "ketoprofeno_ev": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Ketoprofeno 100 mg cada 8 horas vía endovenosa",
        "description": "Indicación ketoprofeno vía endovenosa",
        detail: "ketoprofeno vía endovenosa"
    },
    "fcos_uso_habitual": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Reiniciar fármacos de uso habitual${1}",
        "description": "Indicación fármacos de uso habitual",
        detail: "Fármacos de uso habitual"
    },
    "plantilla_indicaciones_gine": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "\n**Generales**:\n1. Reposo relativo\n2. Régimen liviano\n3. Lactancia materna según indicación de pediatría\n4. Abstinencia sexual por 40 días\n5. Aseo genital con agua, no utilizar jabón, secar con toques, no frotar\n\n**Fármacos**:\n  \n1. Paracetamol 1 gr cada 8 horas por 5 días en caso de dolor\n2. Ketoprofeno 50 mg cada 8 horas por 3 días en caso de dolor\n\n**Controles**:\n1. Control en 5-7 días con matrona en su CESFAM, debe acudir con recién nacido y solicitar hora con anticipación\n2. En caso de presentar irritabilidad marcada, rechazo a recién nacido, pena persistente o síntomas similares, acudir a su CESFAM para orientación y manejo.\n3. Consultar en urgencias en caso de síntomas de alarma tales como: ${1:dolor abdominal que no cede con analgesia, sangrado genital abundante, fiebre, dificultad respiratoria, u otros síntomas que estime deban recibir atención médica de urgencias}.\n",
        detail: "Plantilla de indicaciones"
    },
    "reposo_regimen": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Reposo ${1:relativo}\nRégimen ${2:liviano}",
        detail: "Reposo y régimen alimenticio"
    },
    "control_puerperio": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Control${1: de la díada} en ${2:5-7} días con ${3:matrona}, en ${4:CESFAM correspondiente}, agendar hora. ${5:Debe acudir con recién nacido}\nEn caso de presentar irritabilidad marcada, rechazo a recién nacido, pena persistente o síntomas similares, acudir a su CESFAM para orientación y manejo",
        detail: "Control y consulta en urgencias"
    },
    "sos": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "Consultar en urgencias en caso de síntomas de alarma tales como: ${1:dolor abdominal que no cede con analgesia, sangrado genital abundante, fiebre, dificultad respiratoria, u otros síntomas que estime deban recibir atención médica de urgencias}.",
        detail: "Consulta sos en urgencias"
    },
    "remota_pediatria":
    {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `Antecedentes:
- Perinatales: embarazo controlado, parto \${1:vaginal/cesárea}, RNT \${2:38} semanas, PN \${3:nn} g TN \${4:nn} cm, sin patología perinatal.
- Mórbidos: (-)
- Hospitalizaciones: (-)
- Medicamentos: (-)
- Quirúrgicos: (-)
- Alergias: (-)
- Vacunas: PNI al día, Covid-19 (+), Influenza 2023 (+)
`,
        detail: "Anamnesis remota pediatría"
    },
    "ex_fisico_pediatria":
    {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `
Examen físico:
- \${1:Consciente, orientado, cooperador, reactivo al medio}, llenado capilar < 2 segundos
- T° \${2:num}°C, FC \${3:num} lpm, FR \${4:num} rpm, SatO2 \${5:num}%
- Mucosas rosadas e hidratadas, signo del pliegue (-), ojos no hundidos, llanto con lagrimas. Faringe y amigdalas no eritematosas. 
- Oído: CAE sin eritema ni secreción. Tímpano claro, no abombado, sin perforación
- Fontanela anterior normotensa, no abombada, no deprimida.
- Cuello: no palpo adenopatías
- Torax simétrico sin retracciones.
- Cardiopulmonar: MP (+) sin ruidos agregados, RR2T no ausculto soplos
- Abdomen: RHA(+). Blando, depresible, no doloroso, no palpo masas ni visceromegalias. Blumberg (-). 
- EEII: sin edema, pulsos palpables simétricos.
- Piel y faneras: 
- Neurológico: 
`,
        detail: "Examen físico pediatría"
    }, 
    "certificado_salud" : {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `CERTIFICADO DE SALUD

Dr. Daniel Arturo San Martín Martínez
Médico Cirujano
Registro Nacional: 861577
Dirección: CESFAM Los Bajos de San Agustín, Av. Calera de Tango Paradero 13, Calera de Tango, Santiago

A quien corresponda:

Por medio de la presente, certifico que \${1:el(la) Sr(a). [Nombre completo del paciente]}, RUT \${2:[Número de identificación]}, ha sido evaluado(a) en consulta médica el día \${3:fecha de evaluación}.

Tras la revisión de sus antecedentes clínicos y la realización de un examen físico completo, se concluye que el(la) paciente se encuentra \${4:en óptimas condiciones de salud, sin evidencias de patologías que puedan comprometer su desempeño profesional}.

Esta certificación se emite a solicitud del interesado(a) para ser presentada para los fines que estime conveniente.

Sin otro particular, quedo a disposición para cualquier consulta adicional.

Atentamente,

Dr. Daniel Arturo San Martín Martínez
Médico-Cirujano
Registro SIS: 861577
dasanmartinm@gmail.com
`,
        detail: "Certificado de salud"
    },
    "control_cv": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `Acude a control CV con resultado de exámenes.

-------------------------ANTECEDENTES------------------
- AM: DM2 (\${2:+}), HTA (\${3:+}), Dislipidemia (\${4:+}) 
    - IAM (\${5:-}), ACV (\${6:-})
- Fco: \${7:fcos}
- Cx: \${8:niega}
- Alergia: no refiere
- A.familiares: 
    - IAM: (\${9:-}) 
    - IAM/ACV < 65 años: 
- Hábitos:  
    - TBQ: (\${10:+})
    - OH: (\${11:+})
    - Drogas: (\${12:+})
    - Ejercicio: (\${13:+})
    - Alimentación: \${14:Consumo de frutas y verduras, fuentes de proteínas no ultraprocesadas, bajo consumo de azúcares y grasas saturadas}
- Vacunas: Influenza (\${15:+}), Neumococo (\${16:+}), Covid-19 (\${17:+})
- Social: Vive con (\${18:pareja/hijos}), estudios (\${20:estudios})
- Actividad: Actualmente (\${21:actividad})

—---------------------ACTUALMENTE—-------------------
Paciente refiere sentirse \${22:bien}, sin síntomas de alarma.
- Adherencia al tto: (\${23:buena})

Interrogatorio Dirigido
- DM: Polidipsia (\${24:-}) polifagia (\${25:-})   poliuria  (\${26:-})   perdida de peso (\${27:-})
- Complicaciones DM: Dolor (\${28:-}) Ardor (\${29:-}) Adormecimiento (\${30:-}), visión borrosa (\${31:-})
- HTA: : Tinnitus (\${32:-})   cefalea (\${33:-})    visión doble (\${34:-})
- IC: 
    DPN (\${35:-}), ortopnea (\${36:-}), Nicturia (\${37:-})
    angina (\${38:-}), edema EEII(\${39:-}), Claudicación intermitente (\${40:-})
    Capacidad funcional NYHA: (\${41:I: sin disnea
II: a la actividad física leve
III: a las actividades de lavida diaria
IV: en reposo})

Otros síntomas: (\${42:ninguno})

------------------------EXÁMEN FÍSICO--------------------

-Paciente en BCG, Bien hidratado y perfundido a distal
-Cuello: sin adenopatías palpables, no ausculto soplo carotideo, acantosis nigricans () acrocordones ()
-Tórax: simétrico, sin lesiones. MP+, SRA. Cardiaco con RR2T, no ausculto soplos
-EEII: pulsos presentes y simétricos, sin lesiones. Edema (), sin signos de TVP. 

-------------------------LABORATORIO---------------------
 / / 24 en formulario,  destaca \${43:}

------------------------PLAN---------------------------

1. Educación sobre patologías, importancia de mantener adherencia a controles, tratamiento farmacológico y hábitos de vida saludable, alimentación saludable y actividad física mínimo 150 minutos/semana
2. Educación síntomas de alarma y consulta en servicio de urgencias SOS
3. Se extiende receta por 6 meses 

4. Próximo control Programa Cardiovascular: 

5. (Solicito Fondo de Ojo  y para próximo control Exámenes FALTANTES)  

`,
    detail: "Control cardiovascular"
    },
    "ingreso_cv": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `Ingresa a control CV
Planes:
1) solicito ex ingreso PSCV:
    - Hematocrito
    - Glicemia
    - Perfil lipídico
    - Creatinina plasmática
    - Uricemia
    - Electrolitos plasmáticos
    - Orina completa
    - Electrocardiograma
    - Razón albuminuria creatinuria RAC (en DM e HTA)
    - HbA1c (en DM)
    - Fondo de ojo (DM confirmada)
2) Recomendación hábitos de vida saludable: alimentación saludable, cese tabáquico, actividad física regular (>150 min/semana, sugiero revisar página programa "elige vivir sano"), moderación en consumo de alcohol

`, 
    detail: "Ingreso control cardiovascular"
    },
    "control_sm": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `Control de salud mental
Remota:
- Enfermedades Previas:
- Fármacos:
- Alergias:
- Antecedentes Familiares:
- Con quien vive:
- Pareja:
- Hijos:
- Mascota:
- Ocupación:
- Tabaquismo/Drogas/OH:

Motivo de Consulta
- Inicio/Desencadanante: 
- Síntomas: 
- Temporalidad: 
- Factores estresantes: 
- Episodios y tratamentos previos: 

Adherencia a fármacos: 

Psicoterapia: 
Crisis de pánico: no 

1. Ánimo:     /10 
2. Ansiedad:  /10
3. Sueño:    durmiendo bien 
4. Apetito:  regular
5. Memoria:  normal 
6. Abuso de sustancias: no 
7. Sensopercepción:     normal
8. Impulsividad: no 
9. Suicidio:     no

Examen Mental:
1. Apariencia y conducta:
    - Aspecto: normal 
    - Edad cronológica: acorde
    - Saludo y normas sociales: si
    - Vestimenta, cuidado: normal
2. Psicomotricidad: 
    - Postura corporal: adecuada 
    - Mímica facial: normal
    - Contacto visual: si
3. Conciencia
    - Vigil: si
    - Atención y concentración: desconcentrada 
    - Orientación: normal
4. Discurso
    - Intensidad voz: normal 
    - Velocidad:      normal 
    - Vocabulatorio:  normal 
    - Continuidad:    normal 
    - Lógica del discurso: si 
5. Contenido del discurso:
    - Delirio: no
    - Ideas y miedos patológicos: si, andar en metro 
6. Afectividad neutralidad 
7. Sensopercepción -> Ilusiones y alucinaciones: no
`,
        detail: "Control salud mental"
    },


"examen_mental": {
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: `Examen mental
1. Apariencia y conducta:
    - Aspecto: normal 
    - Edad cronológica: acorde
    - Saludo y normas sociales: si
    - Vestimenta, cuidado: normal
2. Psicomotricidad: 
    - Postura corporal: adecuada 
    - Mímica facial: normal
    - Contacto visual: si
3. Conciencia
    - Vigil: si
    - Atención y concentración: desconcentrada 
    - Orientación: normal
4. Discurso
    - Intensidad voz: normal 
    - Velocidad:      normal 
    - Vocabulatorio:  normal 
    - Continuidad:    normal 
    - Lógica del discurso: si 
5. Contenido del discurso:
    - Delirio: no
    - Ideas y miedos patológicos: si, andar en metro 
6. Afectividad neutralidad 
7. Sensopercepción -> Ilusiones y alucinaciones: no`
    ,
    detail: "Examen mental"
},
"remota_salud_mental": {
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: `Antecedentes:
- Enfermedades Previas:\${1:}
- Fármacos:\${2:}
- Alergias:\${3:}
- Antecedentes Familiares:\${4:}
- Con quien vive:\${5:}
- Pareja:\${6:}
- Hijos:\${7:}
- Mascota:\${8:}
- Ocupación:\${9:}
- Drogas: TBQ (\${10:+}) OH (\${11:+}) Drogas (\${12:+})`,
    detail: "Anamnesis remota salud mental"
},
"sos_cefalea": {
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: `Consultar en urgencias en caso de síntomas de alarma tales como: cefalea de inicio súbito para llegar a dolor intenso, fiebre, debilidad muscular, visión borrosa, empeoramiento al acostarse o al toser, sensación de pitido en el oído o disminución de audición, confusión, asimetría facial u otros síntomas que estime deban recibir atención médica de urgencias.`,  
    detail: "banderas rojas cefalea"
},
"sos_lumbago": {
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: `Consultar en urgencias en caso de síntomas de alarma tales como: lumbago con debilidad o adormecimiento en piernas, pérdida de control de esfínteres, fiebre, pérdida de peso, dolor nocturno o que no mejora con el reposo, otros síntomas que estime deban recibir atención médica de urgencias.`,  
    detail: "banderas rojas lumbago"
},
"sos_dolor_abdominal": {
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: `Consultar en urgencias en caso de síntomas de alarma tales como: dolor abdominal intenso, fiebre, vómitos persistentes, sangrado, pérdida de peso, otros síntomas que estime deban recibir atención médica de urgencias.`,  
    detail: "banderas rojas dolor abdominal"
},
"sos_dolor_toracico": {
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: "Consultar en urgencias en caso de síntomas de alarma tales como: dolor torácico intenso, dolor al hombro o mandíbula, dificultad para respirar, sudoración excesiva, mareo o desmayo, otros síntomas que estime deban recibir atención médica de urgencias.",
    detail:"banderas rojas dolor torácico"}
};



export default snippets_basales;
