# Rega Api

## API Reference

### Auth Routes

#### Register User

```http
  POST /api/register
```

| Parameter  | Type     |
| :--------- | :------- |
| `email`    | `string` |
| `username` | `string` |
| `password` | `string` |

#### Login User

```http
  POST /api/login
```

| Parameter  | Type     |
| :--------- | :------- |
| `email`    | `string` |
| `password` | `string` |

#### Detecte Traffic

```http
  POST /api/detecteTraffic
```

| Parameter  | Type     |
| :--------- | :------- |
| `token`    | `string` |

### Socket Events

#### Set Location

```socket
  on setLocation
```
