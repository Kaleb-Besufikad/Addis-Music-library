import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../hooks";
import {fetchStatistics} from "../../actions/statstics";
import {Title} from "../SongCard/style";
import {Stats as StatsType} from '../../types/statisticsTypes';
import {StatBox, StatDetail, StatTitle} from "./style";
import Loading from "../Loading";

const StatsPage = () => {
    const dispatch = useAppDispatch();
    const statistics = useSelector((state: { statistics: StatsType }) => state.statistics);

    const sortedSongsPerGenre = statistics.songsPerGenre ?
        [...statistics.songsPerGenre]
            .sort((a, b) => a._id < b._id ? -1 : 1) :
        [];
    const sortedSongsPerArtist = statistics.songsPerArtist ?
        [...statistics.songsPerArtist]
            .sort((a, b) => a.artist < b.artist ? -1 : 1) :
        [];
    const sortedSongsPerAlbum = statistics.songsPerAlbum ?
        [...statistics.songsPerAlbum]
            .sort((a, b) => a._id < b._id ? -1 : 1) :
        [];

    useEffect(() => {
        dispatch(fetchStatistics());
    }, [dispatch]);

    return (
        !statistics ? <Loading size={10}/> :
            <StatBox mx="0 !important" sx={{
                border: 'none !important ',
                backgroundColor: 'transparent !important',
                backdropFilter: 'none !important'
            }}
                     display="flex" flexWrap="wrap">
                <Title width="100%"
                       sx={{
                           borderRadius: '0.5em',
                           backgroundColor: 'rgba(83,83,83,0.7)',
                       }}>Statistics</Title>

                <StatBox width={['100%', '47%', '20%']}
                         sx={{height: '100% !important', paddingBottom: '1em !important'}}>
                    <StatTitle color='#fff' style={{marginBottom: '0.8em'}}>Overall</StatTitle>

                    <StatDetail>
                        <span>songs</span>
                        <span>{statistics.totalSongs ? statistics.totalSongs : <Loading size={1}/>}</span>
                    </StatDetail>
                    <StatDetail>
                        <span>artists</span>
                        <span>{statistics.totalArtists ? statistics.totalArtists.length : <Loading size={1}/>}</span>
                    </StatDetail>
                    <StatDetail>
                        <span>albums</span>
                        <span>{statistics.totalAlbums ? statistics.totalAlbums.length : <Loading size={1}/>}</span>
                    </StatDetail>
                    <StatDetail>
                        <span>genres</span>
                        <span>{statistics.totalGenres ? statistics.totalGenres.length : <Loading size={1}/>}</span>
                    </StatDetail>
                </StatBox>

                <StatBox width={['100%', '47%', '24%']}>
                    <StatTitle color='#fff'>Genres</StatTitle>{
                    <ul>
                        {statistics.songsPerGenre ? sortedSongsPerGenre.map((genre: any) => (
                            <li key={genre._id} style={{color: '#fff', listStyle: 'none'}}>
                                <StatDetail>
                                    <span>{genre._id}</span><span>{genre.count}</span>
                                </StatDetail>
                            </li>
                        )) : <Loading size={1}/>}
                    </ul>}
                </StatBox>
                <StatBox width={['100%', '47%', '23%']}>
                    <StatTitle color='#fff'>Artists</StatTitle>
                    <ul>
                        {statistics.songsPerArtist ? sortedSongsPerArtist.map((artist: any) => (
                            <li key={artist._id} style={{color: '#fff', listStyle: 'none'}}>
                                <StatDetail>
                                    <span>{artist._id}</span><span>{artist.songsCount} songs, {artist.albumsCount} albums</span>
                                </StatDetail>
                            </li>
                        )) : <Loading size={1}/>}
                    </ul>
                </StatBox>
                <StatBox width={['100%', '47%', '23%']}>
                    <StatTitle>Albums</StatTitle>
                    <ul>
                        {statistics.songsPerAlbum ? sortedSongsPerAlbum.map((album: any) => (
                            <li key={album._id} style={{color: '#fff', listStyle: 'none'}}>
                                <StatDetail><span>{album._id}</span>
                                    <span>{album.count}</span></StatDetail>
                            </li>
                        )) : <Loading size={1}/>}
                    </ul>
                </StatBox>
            </StatBox>
    )

}

export default StatsPage;