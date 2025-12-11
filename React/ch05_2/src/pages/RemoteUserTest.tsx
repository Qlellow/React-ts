import { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useToggle } from '../hooks'
import { Title, Avatar } from '../components'
import * as D from '../data'
import type { AppState } from '../store'
import * as R from '../store/remoteUser'

export default function RemoteUserTest() {
  const dispatch = useDispatch()
  const user = useSelector<AppState, R.State>(({ remoteUser }) => remoteUser)
  const [loading, toggleLoading] = useToggle(false)
  const [error, setError] = useState<Error | null>(null)

  const getRemoteUser = useCallback(() => {
    toggleLoading(true)
    D.fetchRandomUser()
      .then(user => dispatch(R.setUser(user)))
      .catch(setError)
      .finally(() => toggleLoading(false))
  }, [dispatch, toggleLoading])

  const changeName = useCallback(() => {
    toggleLoading(true)
    D.fetchRandomUser()
      .then(user => dispatch(R.changeName(user.name)))
      .catch(setError)
      .finally(() => toggleLoading(false))
  }, [dispatch, toggleLoading])

  const changeEmail = useCallback(() => {
    dispatch(R.changeEmail(D.randomEmail()))
  }, [dispatch])

  const changePicture = useCallback(() => {
    dispatch(R.changePicture({ large: D.randomAvatar() }))
  }, [dispatch])

  useEffect(getRemoteUser, [getRemoteUser])

  return (
    <section className="mt-4">
      <Title>RemoteUserTest</Title>
      <div className="flex justify-center mt-4">
        <button className="btn btn-sm btn-primary" onClick={getRemoteUser}>
          Get Remote User
        </button>
        <button className="btn btn-sm btn-accent" onClick={changeName}>
          Change Name
        </button>
        <button className="btn btn-sm btn-success" onClick={changeEmail}>
          Change Email
        </button>
        <button className="btn btn-sm btn-secondary" onClick={changePicture}>
          Change Picture
        </button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <button className="btn-circle loading" />
        </div>
      )}
      {error && (
        <div className="p-4 m-4 bg-red-200">
          <p>{error.message}</p>
        </div>
      )}
      <div className="flex justify-center p-4 m-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
          <p>
            {user.name.title} {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
        </div>
      </div>
    </section>
  )
}
