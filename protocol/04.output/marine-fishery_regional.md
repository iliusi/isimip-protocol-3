Models that produce output in trophic levels instead of a size-based spectrum convert the data according to Ken H. Anderson, *Fish Ecology, Evolution, and Exploitation: A New Theoretical Synthesis*, ISBN: 9780691176550 as per the following assignment:

<table id="tbl:trophic-levels" class="tablenos table table-bordered w-auto">
    <caption>
      Table F1: Trophic level to size conversion.
    </caption>
    <thead class="thead-dark">
        <th>Bins</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
    </thead>
    <tbody>
        <tr>
            <td>Size-based</td>
            <td>1-10g</td>
            <td>10-100g</td>
            <td>100g-1kg</td>
            <td>1-10kg</td>
            <td>10-100kg</td>
            <td>>100kg</td>
        </tr>
        <tr>
            <td>Trophic levels-based</td>
            <td>2.81-3.16</td>
            <td>3.16-3.51</td>
            <td>3.51-3.87</td>
            <td>3.87-4.22</td>
            <td>4.22-4.57</td>
            <td>>4.57</td>
        </tr>
    </tbody>
</table>

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
        'tcb35tl',
        'tcb35to37tl',
        'tcb37tl'
    ]
}) }}

### Ocean regions

{{ table('ocean_region') }}
