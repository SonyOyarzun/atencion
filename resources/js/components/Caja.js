import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import swal from 'sweetalert';

import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        padding: 100,
    },
    media: {
        width: '100%',
        height: undefined,
        aspectRatio: 3,
        
    },
    select: {
        width: 1200,
    },
});

import { solicitar, obtener, cajas } from './Functions'

export default function Caja() {


    const [contador, setContador] = useState({})

    const [posicion, setPosicion] = useState([])

  

    useEffect(() => {

        cajas().then(response => {

            let array = []

            array.push(response)

            setPosicion(array[0])

          console.log('posicion caja :', array)

        }).catch(error => {
          swal("Error " + error)
        })

        obtener().then(response => {

            let array = []

            array.push(response)

            setContador(array[0])

          console.log('contador caja :', array)

        }).catch(error => {
          swal("Error " + error)
        })
    
     
    
      }, []);

      
    
      const listen = () => {
    
        Echo.channel('channel-caja')
          .listen('CajaEvent', (response) => {
            console.log('CajaEvent', response.data[0])
           // setContador(response.data[0])
          });
    
      }

      listen()

    const suma = () => {

        let caja = document.getElementById('caja').value

        const params = {
            posicion: caja
        }

        solicitar(params).then(response => {
            console.log('aumentar :', response)
            swal(response)
        })

    }

    const resta = () => {

        disminuir().then(response => {
            console.log('disminuir :', response)

        })

    }

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://ugm.cl/ugm/site/artic/20200619/imag/foto_0000000420200619134759/300x120_ugm_animado_2.gif"
                    title="Contemplative Reptile"
                />
                <CardContent className={'text-center'}>
                    <Typography gutterBottom variant="h1" component="h2">
                        {contador.numero}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={'text-center'}>
                <Button className='btn btn-block btn-lg success' color="primary" onClick={suma}>
                    Solicitar
        </Button>
            </CardActions>

            <CardActions className={'text-center'}>
                <Select native defaultValue="" id="caja" className={classes.select}>
                    <option aria-label="None" value="" />

                    {posicion.map((data, order) => (
                        <option value={data.descripcion}>{data.descripcion}</option>
                    ))}



                </Select>
            </CardActions>
        </Card>
    );
}