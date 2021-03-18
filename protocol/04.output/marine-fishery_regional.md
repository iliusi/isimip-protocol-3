### Output variables

{{ table('variable', {
    'Mandatory output (provide as many as possible). All biomasses are in wet weight, not g C.': [
        'tcb',
        'tcblog10',
        'tpb',
        'tdb',
        'tc',
        'tclog10',
        'tpc',
        'tdc'
    ],
    'Size-based optional output. All biomasses are in wet weight, not g C.': [
        'bp30cm',
        'bp30to90cm',
        'bp90cm',
        'bd30cm',
        'bd30to90cm',
        'bd90cm',
        'cp30cm',
        'cp30to90cm',
        'cp90cm',
        'cd30cm',
        'cd30to90cm',
        'cd90cm'
    ],
    'Trophic level based for models that can\'t provide sized-based output. All biomasses are in wet weight, not g C.': [
        'tcbtl',
        'tcb35tl',
        'tcb35to37tl',
        'tcb37tl'
    ]
}) }}

### Ocean regions

{{ table('ocean_region') }}
