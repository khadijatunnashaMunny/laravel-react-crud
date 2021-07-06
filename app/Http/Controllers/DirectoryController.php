<?php

namespace App\Http\Controllers;

use App\Models\directory;
use Illuminate\Http\Request;

class DirectoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return directory::all();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required',
            'number' => 'required'
        ]);

        directory::create($request->all());

        return response('', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function show(directory $directory)
    {
        //
        return $directory;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, directory $directory)
    {
        //
        $request->validate([
            'name' => 'required',
            'number' => 'required'
        ]);

        $directory->update($request->all());

        return response('', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\directory  $directory
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        //
        $directory = Directory::find($id);
        $directory->delete();
        // return response('', 204);
    }
}
